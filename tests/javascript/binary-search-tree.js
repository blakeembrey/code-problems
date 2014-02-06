var assert = require('assert');
var isBST = require('../../solutions/javascript/binary-search-tree-check');
var bst = require('../../solutions/javascript/binary-search-tree');

var root = bst.add(50).add(9).add(100)
  .add(7).add(10).add(8).add(6)
  .add(75).add(150).add(175).add(125);

var node = function(value, left, right) {
  var result = {
    value: value
  };
  if (left) {
    result.left = left;
  }
  if (right) {
    result.right = right;
  }
  return result;
};

var jsonify = function(object) {
  return JSON.parse(JSON.stringify(object));
};

var expect;

describe('binary search tree', function() {
  it('root should pass a valid binary search tree', function() {
    expect = node(50,
      node(9,
        node(7, node(6), node(8)),
        node(10)
      ),
      node(100,
        node(75),
        node(150, node(125), node(175))
      )
    );

    assert.ok(isBST(root));
    assert.deepEqual(jsonify(root), jsonify(expect));
  });

  it('deleting nodes should pass a valid binary search tree', function() {
    root.delete(125).delete(9).delete(75);

    expect = node(50,
      node(8,
        node(7, node(6)),
        node(10)
      ),
      node(100,
        undefined,
        node(150, undefined, node(175))
      )
    );
    assert.ok(isBST(root));
    assert.deepEqual(jsonify(root), jsonify(expect));
  });

  it('deleting unexisted nodes should pass a valid binary search tree',
    function() {
      root.delete(1252222).delete(20392); //delete unexisted node 
      assert.ok(isBST(root));
      assert.deepEqual(jsonify(root), jsonify(expect));
    });

  it('search nodes', function() {
    var searchExpect;
    var searchResult = root.search(999999); // if not existed
    assert.ok(!searchResult);

    searchResult = root.search(125);
    assert.ok(!searchResult);

    searchExpect = node(7, node(6));
    searchResult = root.search(7); // if existed
    assert.deepEqual(jsonify(searchResult), jsonify(searchExpect));

    searchExpect = node(100, undefined, node(150, undefined, node(175)));
    searchResult = root.search(100); // if existed
    assert.deepEqual(jsonify(searchResult), jsonify(searchExpect));

    searchExpect = node(50, node(8, node(7, node(6)), node(10)),
      node(100, undefined, node(150, undefined, node(175))));
    searchResult = root.search(50); // if existed
    assert.deepEqual(jsonify(searchResult), jsonify(searchExpect));
  });

  it('delete root', function() {
    var rootExpect;

    root.delete(50);
    rootExpect = node(10, node(8, node(7, node(6))),
      node(100, undefined, node(150, undefined, node(175))));
    assert.deepEqual(jsonify(root), jsonify(rootExpect));

    //remove left sub tree
    root.delete(10).delete(8).delete(7).delete(6);
    rootExpect = node(100, undefined, node(150, undefined, node(175)));
    assert.deepEqual(jsonify(root), jsonify(rootExpect));

    //remove right sub tree
    root.delete(175).delete(150).add(6).add(5).add(8).add(7).delete(100);
    rootExpect = node(6, node(5), node(8, node(7)));
    assert.deepEqual(jsonify(root), jsonify(rootExpect));

    //remove every node.
    root.delete(6).delete(5).delete(8).delete(7);
    assert.equal(undefined, root.value);
  });
});