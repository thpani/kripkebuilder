var exampleArray = {
  '2015-10-16': {
    "elements": {
      "edges": [
        { "data": { "source": "s0", "target": "s3", "id": "ele0" } },
        { "data": { "source": "s3", "target": "s1", "id": "ele1" } },
        { "data": { "source": "s1", "target": "s3", "id": "ele2" } },
        { "data": { "source": "s3", "target": "s2", "id": "ele3" } },
        { "data": { "source": "s2", "target": "s4", "id": "ele4" } },
        { "data": { "source": "s4", "target": "s2", "id": "ele5" } },
        { "data": { "source": "s1", "target": "s4", "id": "ele6" } }
      ],
      "nodes": [
        { "data": { "id": "s0", "labels": [ "b" ] }, "position": { "x": 261.53030502635016, "y": 289.60201983979795 } },
        { "data": { "id": "s1", "labels": [ "a" ] }, "position": { "x": 585.1027782709162, "y": 292.6488523143541 } },
        { "data": { "id": "s2", "labels": [ "a", "c" ] }, "position": { "x": 564.4458204157091, "y": 408.251264236131 } },
        { "data": { "id": "s3", "labels": [ "b" ] }, "position": { "x": 396.7988816446759, "y": 290.36450351050553 } },
        { "data": { "id": "s4", "labels": [ "b", "c" ] }, "position": { "x": 742.9927378563254, "y": 292.0509838020438 } }
      ]
    },
    "formulae": [ 'G(c)', 'X(a & c)', 'AG(a)', 'EF(a)' ]
  },
  '2015-12-04': {
    "elements": {
      "edges": [
        { "data": { "source": "s4", "target": "s4", "id": "ele4" } },
        { "data": { "source": "s4", "target": "s2", "id": "ele5" } },
        { "data": { "source": "s2", "target": "s0", "id": "ele6" } },
        { "data": { "source": "s0", "target": "s0", "id": "ele7" } },
        { "data": { "source": "s2", "target": "s1", "id": "ele8" } },
        { "data": { "source": "s1", "target": "s1", "id": "ele9" } },
        { "data": { "source": "s3", "target": "s1", "id": "ele10" } }
      ],
      "nodes": [
        { "data": { "id": "s0", "labels": [ "b", "c" ] }, "position": { "x": 609, "y": 242 } },
        { "data": { "id": "s1", "labels": [ "b" ] }, "position": { "x": 439, "y": 208 } },
        { "data": { "id": "s2", "labels": [ "a", "b", "c" ] }, "position": { "x": 439, "y": 386 } },
        { "data": { "id": "s3", "labels": [ "a", "b", "c" ] }, "position": { "x": 269, "y": 252 } },
        { "data": { "id": "s4", "labels": [ "a", "c" ] }, "position": { "x": 265, "y": 386 } }
      ]
    },
    "formulae": [ 'G(b)', 'X(c)', 'AX(a & b & c)', 'EF(a & b & c)' ]
  }
};
