var baseURL = 'http://gensat-thpani.rhcloud.com/';
angular
  .module('kripkeBuilder', [])
  .controller('KripkeController', function($scope, $http) {
    $scope.nodeCounter = 0;
    $scope.selectedNode = null;
    $scope.labels = null;
    $scope.result = null;
    $scope.drawEdges = null;
    $scope.formula = '';
    $scope.formulae = [];

    $scope.exampleArray = [];
    for (key in exampleArray) {
      $scope.exampleArray.unshift(key);
    }

    var setResult = function() {
      if ($scope.response == null) { // null or undefined
        $scope.result = null;
      } else if ($scope.response.kind == 'error') {
        $scope.result = $scope.response.output;
      } else if ($scope.response.kind == 'success' ) {
        if ($scope.selectedNode != null) {
          $scope.result = $scope.response.output[$scope.selectedNode];
        } else if ($scope.response.result.length == 0) {
          $scope.result = $scope.formula + " is false in all states.\nSelect a state to see the resp. counterexample";
        } else if ($scope.response.result.length == $scope.cy.nodes().length) {
          $scope.result = $scope.formula + " is true in all states.";
        } else {
          $scope.result = $scope.formula + " is true in states " + $scope.response.result.sort()+".\nSelect a red state to see the resp. counterexample.";
        }
      } else {
        console.assert(false, "Response kind");
      }
    };

    $scope.$watch(
      function() { return $scope.selectedNode; },
      function(newValue, oldValue) {
        $scope.labels = null ? newValue === null : $scope.cy.nodes('#'+$scope.selectedNode).data('labels');
        setResult();
    });
    $scope.$watch(
      function() { return $scope.response; },
      function(newValue, oldValue) {
        setResult();
        $scope.cy.nodes().removeClass('sat unsat');
        if (newValue != null && newValue.kind == 'success') {
          $scope.cy.nodes().forEach(function(node) {
            var cls = newValue.result.indexOf(node.id()) === -1 ?
              'unsat' : 'sat';
            node.addClass(cls);
          });
        }
    });

    $scope.load = function(graph) {
      $scope.clear();

      $scope.cy.json(graph);
      $scope.cy.nodes().removeClass('sat unsat');
      $scope.cy.fit([], 50);

      $scope.formulae = graph.formulae;
      $scope.nodeCounter = Math.max.apply(
        null,
        graph['elements']['nodes'].map(function(node) {
          return parseInt(node['data']['id'].substring(1));
        })
      ) + 1;
    };
    $scope.loadExample = function(idx) {
      var example = exampleArray[idx];
      $scope.load(example);
    };
    $scope.open = function() {
      var i = document.createElement('input');
      i.type = 'file';
      i.accept = '.json';
      i.addEventListener('change', function(e) {
        var file = i.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
          try {
            var graph = JSON.parse(reader.result);
            $scope.load(graph);
          } catch (err) {
            console.log (err);
            $scope.response = {
              kind: 'error',
              output: "Error reading file: " + err.message
            };
          } finally {
            i.remove();
            $scope.$apply();
          }
        }
        reader.readAsText(file);	
      });
      i.click();
    }
    var save = function(download, href) {
      var a = document.createElement('a');
      a.download = download;
      a.href = href;
      a.click();
      a.remove();
    };
    $scope.saveJson = function() {
      var json = $scope.cy.json();
      var graph = { elements: {} };
      if (json.elements.edges !== undefined) {
        graph.elements.edges = json.elements.edges.map(function(edge) { return { data: edge.data }; });
      }
      if (json.elements.nodes !== undefined) {
        graph.elements.nodes = json.elements.nodes.map(function(node) { return { data: node.data, position: node.position }; });
      }
      if ($scope.formulae.length > 0) {
        graph.formulae = $scope.formulae;
      }
      var jsonString = JSON.stringify(graph, null, 2);
      save('graph.json', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString));
    };
    $scope.savePng = function() {
      save('graph.png', $scope.cy.png());
    };
    $scope.updateLabels = function() {
      $scope.cy.nodes(':selected').data(
        'labels',
        $scope.labels.map(function(label) { return label.trim(); })
      );
      $scope.response = null;
    };
    $scope.delete = function() {
      $scope.cy.elements(':selected').remove();
      $scope.selectedNode = null;
      $scope.response = null;
    };
    $scope.clear = function() {
      $scope.cy.remove('*');
      $scope.nodeCounter = 0;
      $scope.selectedNode = null;
      $scope.response = null;
      $scope.formulae = [];
    };
    $scope.checkFormula = function(formula) {
      if (formula != null) {
        $scope.formula = formula;
      }

      $scope.cy.nodes().unselect();
      $scope.selectedNode = null;

      var nodes = {};
      var isLeftTotal = $scope.cy.nodes().every(function(node) {
        nodes[node.id()] = {
          succ: node.outgoers().targets().map(function(n) { return n.id(); }),
          labels: node.data('labels')
        };

        // test left-totality
        return node.outgoers().length > 0;
      });

      if (!isLeftTotal) {
        $scope.response = {
          kind: 'error',
          output: 'Structure is not left-total (every node needs at least one outgoing edge)!'
        };
        return;
      }

      var data = {
        kripke: { nodes: nodes },
        formula: $scope.formula
      };

      var target = document.getElementById('cy')
      var spinner = new Spinner({scale:2}).spin(target);

      $http.post(baseURL, JSON.stringify(data)).then(
        function(response) {
          spinner.stop();
          $scope.response = response.data;
          $scope.response.kind = 'success';
        },
        function(response) {
          spinner.stop();
          $scope.response = {
            output: response.data ? response.data : "Error connecting to the model-checker web service.",
            kind: 'error'
          };
        }
      );
    };

    $scope.cy = cytoscape({
      container: document.getElementById('cy'),
      style: [{
        selector: 'node',
        style: {
          label: function(ele) { return ele.id() + ": " + ele.data('labels'); },
          'background-color': '#888',
          width: '100px',
          height: '50px',
          color: 'white',
          'text-valign': 'center',
        }
      }, {
        selector: 'node.sat',
        style: {
          'background-color': '#008000'
        }
      }, {
        selector: 'node.unsat',
        style: {
          'background-color': '#FF0000'
        }
      }, {
        selector: 'edge',
        style: {
          width: '2px',
          'line-color': '#888',
          'target-arrow-color': '#888',
          'target-arrow-shape': 'triangle'
        }
      }, {
        selector: ':selected',
        style: {
          'background-color': '#333',
          'line-color': '#333',
          'target-arrow-color': '#333',
        }
      }, {
        selector: 'node.sat:selected',
        style: {
          'background-color': '#005000'
        }
      }, {
        selector: 'node.unsat:selected',
        style: {
          'background-color': '#BB0000'
        }
      }]
    });
    $scope.cy.ready(function(event) {
      var cy = event.cy;
      cy.on('tap', function(event) {
        if (event.cyTarget === cy) {
          if ($scope.selectedNode === null) {
            cy.add({
              group: "nodes",
              data: { id: "s" + $scope.nodeCounter, labels: [] },
              renderedPosition: event.cyRenderedPosition
            });
            $scope.nodeCounter++;
            $scope.response = null;
          }
          cy.nodes().unselect();
          $scope.selectedNode = null;
        } else {
          // tap on a node
          if ($scope.drawEdges && $scope.selectedNode !== null) {
            cy.add({
              group: 'edges',
              data: { source: $scope.selectedNode, target: event.cyTarget.id() }
            });
          }
          event.cyTarget.select();
          $scope.selectedNode = event.cyTarget.id();
        }
        $scope.$apply();
    });
  });
});
