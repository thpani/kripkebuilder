var baseURL = 'http://gensat-thpani.rhcloud.com/';
angular
  .module('kripkeBuilder', [])
  .directive('kripkeCanvas', function() {
    function link(scope, element, attrs) {
      scope.nodeCounter = 0;
      scope.selectedNode = null;
      scope.labels = null;
      scope.result = null;
      scope.drawEdges = null;

      scope.exampleArray = [];
      for (key in exampleArray) { // exampleArray is an Object
        scope.exampleArray.unshift(key);
      }

      scope.ks = {};
      scope.ks.getSelectedNode = function() { return scope.selectedNode; };
      scope.ks.isLeftTotal = function() {
        return scope.cy.nodes().every(function(node) {
          return node.outgoers().length > 0;
        });
      };
      scope.ks.countNodes = function() { return scope.cy.nodes().length; };
      scope.ks.getNodes = function() {
        var nodes = {};
        scope.cy.nodes().every(function(node) {
          nodes[node.id()] = {
            succ: node.outgoers().targets().map(function(n) { return n.id(); }),
            labels: node.data('labels')
          };
          return true;
        });
        return nodes;
      }
      scope.ks.unselect = function() {
        scope.cy.nodes().unselect();
        scope.selectedNode = null;
      };
      scope.ks.paintNodes = function(newValue) {
        scope.cy.nodes().removeClass('sat unsat');
        if (newValue != null && newValue.kind == 'success') {
          scope.cy.nodes().forEach(function(node) {
            var cls = newValue.result.indexOf(node.id()) === -1 ?
              'unsat' : 'sat';
            node.addClass(cls);
          });
        }
      };

      scope.load = function(graph) {
        scope.onLoad({graph:graph});

        scope.clear();

        scope.cy.json(graph);
        scope.cy.nodes().removeClass('sat unsat');
        scope.cy.fit([], 50);

        scope.nodeCounter = Math.max.apply(
          null,
          graph['elements']['nodes'].map(function(node) {
            return parseInt(node['data']['id'].substring(1));
          })
        ) + 1;
      };
      scope.loadExample = function(idx) {
        var example = exampleArray[idx];
        scope.load(example);
      };
      scope.open = function() {
        var i = document.createElement('input');
        i.type = 'file';
        i.accept = '.json';
        i.addEventListener('change', function(e) {
          var file = i.files[0];
          var reader = new FileReader();
          reader.onload = function(e) {
            try {
              var graph = JSON.parse(reader.result);
              scope.load(graph);
            } catch (err) {
              console.log (err);
              scope.response = {
                kind: 'error',
                output: "Error reading file: " + err.message
              };
            } finally {
              i.remove();
              scope.$apply();
            }
          }
          reader.readAsText(file);	
        });
        i.click();
      };
      var save = function(download, href) {
        var a = document.createElement('a');
        a.download = download;
        a.href = href;
        a.click();
        a.remove();
      };
      scope.saveJson = function() {
        var json = scope.cy.json();
        var graph = { elements: {} };
        if (json.elements.edges !== undefined) {
          graph.elements.edges = json.elements.edges.map(function(edge) { return { data: edge.data }; });
        }
        if (json.elements.nodes !== undefined) {
          graph.elements.nodes = json.elements.nodes.map(function(node) { return { data: node.data, position: node.position }; });
        }
        if (scope.formulae.length > 0) {
          graph.formulae = scope.formulae;
        }
        var jsonString = JSON.stringify(graph, null, 2);
        save('graph.json', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString));
      };
      scope.savePng = function() {
        save('graph.png', scope.cy.png());
      };
      scope.updateLabels = function() {
        scope.cy.nodes(':selected').data(
          'labels',
          scope.labels.map(function(label) { return label.trim(); })
        );
        scope.onChange();
      };
      scope.delete = function() {
        scope.cy.elements(':selected').remove();
        scope.selectedNode = null;
        scope.onChange();
      };
      scope.clear = function() {
        scope.cy.remove('*');
        scope.nodeCounter = 0;
        scope.selectedNode = null;

        scope.onChange();
        scope.formulae = [];
      };
      scope.cy = cytoscape({
        container: element[0].getElementsByClassName('cy')[0],
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
      scope.cy.ready(function(event) {
        var cy = event.cy;
        cy.on('tap', function(event) {
          if (event.cyTarget === cy) {
            if (scope.selectedNode === null) {
              cy.add({
                group: "nodes",
                data: { id: scope.prefix + scope.nodeCounter, labels: [] },
                renderedPosition: event.cyRenderedPosition
              });
              scope.nodeCounter++;
              scope.onChange();
            }
            cy.nodes().unselect();
            scope.selectedNode = null;
          } else {
            // tap on a node
            if (scope.drawEdges && scope.selectedNode !== null) {
              cy.add({
                group: 'edges',
                data: { source: scope.selectedNode, target: event.cyTarget.id() }
              });
            }
            event.cyTarget.select();
            scope.selectedNode = event.cyTarget.id();
          }
          scope.$apply();
        });
      });
      scope.$watch('selectedNode', function(newValue, oldValue) {
        scope.labels = newValue === null ? null : scope.cy.nodes('#'+scope.selectedNode).data('labels');
        scope.onSelectNode();
      });
    }

    return {
      link: link,
      templateUrl: 'kripke-canvas.html',
      scope: {
        ks: '=',
        onSelectNode: '&',
        onLoad: '&',
        onChange: '&',
        formulae: '=',
        prefix: '@'
      }
    };
  })
  .controller('KripkeController', function($scope, $http) {
    $scope.formula = '';
    $scope.formulae = [];
    $scope.response = null;

    $scope.onLoad = function(graph) {
      $scope.formulae = graph.formulae;
    }
    $scope.setResult = function() {
      if ($scope.response == null) { // null or undefined
        $scope.result = null;
      } else if ($scope.response.kind == 'error') {
        $scope.result = $scope.response.output;
      } else if ($scope.response.kind == 'success' ) {
        if ($scope.ks.getSelectedNode() != null) {
          $scope.result = $scope.response.output[$scope.ks.getSelectedNode()];
        } else if ($scope.response.result.length == 0) {
          $scope.result = $scope.formula + " is false in all states.\nSelect a state to see the resp. counterexample";
        } else if ($scope.response.result.length == $scope.ks.countNodes()) {
          $scope.result = $scope.formula + " is true in all states.";
        } else {
          $scope.result = $scope.formula + " is true in states " + $scope.response.result.sort()+".\nSelect a red state to see the resp. counterexample.";
        }
      } else {
        console.assert(false, "Response kind");
      }
    };

    $scope.$watch('response', function(newValue, oldValue) {
      $scope.setResult();
      if ($scope.ks !== undefined) $scope.ks.paintNodes(newValue);
    });

    $scope.checkFormula = function(formula) {
      if (formula != null) {
        $scope.formula = formula;
      }

      $scope.ks.unselect();

      if (!$scope.ks.isLeftTotal()) {
        $scope.response = {
          kind: 'error',
          output: 'Structure is not left-total (every node needs at least one outgoing edge)!'
        };
        return;
      }

      var data = {
        kripke: { nodes: $scope.ks.getNodes() },
        formula: $scope.formula
      };

      var target = document.getElementsByTagName('kripke-canvas')
      target = target[0];
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
  });
