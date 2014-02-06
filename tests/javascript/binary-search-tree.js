var assert = require('assert');
var isBST = require('../../solutions/javascript/binary-search-tree-check');
var bst = require("../../solutions/javascript/binary-search-tree");

var root = bst.add(50).add(9).add(100)
  .add(7).add(10).add(8).add(6)
  .add(75).add(150).add(175).add(125);

describe('binary search tree', function() {
  it('root should pass a valid binary search tree', function() {
    assert.ok(isBST(root));
    assert.equal(JSON.stringify(root),
      '{"left":{"left":{"left":{"value":6},"right":{"value":8},"value":7},"right":{"value":10},"value":9},"right":{"left":{"value":75},"right":{"left":{"value":125},"right":{"value":175},"value":150},"value":100},"value":50}');
  });

  it('deleting nodes should pass a valid binary search tree', function() {
    root.delete(125)
      .delete(9)
      .delete(75)
    assert.ok(isBST(root));
    assert.equal(JSON.stringify(root),
      '{"left":{"left":{"left":{"value":6},"value":7},"right":{"value":10},"value":8},"right":{"right":{"right":{"value":175},"value":150},"value":100},"value":50}');
  });

  it('deleting unexisted nodes should pass a valid binary search tree', function() {
    root.delete(1252222).delete(20392) //delete unexisted node 
    assert.ok(isBST(root));
    assert.equal(JSON.stringify(root),
      '{"left":{"left":{"left":{"value":6},"value":7},"right":{"value":10},"value":8},"right":{"right":{"right":{"value":175},"value":150},"value":100},"value":50}');
  });

  it('search nodes', function() {
    var node = root.search(999999); // if not existed
    assert.ok(!node);

    node = root.search(125);
    assert.ok(!node);

    node = root.search(7); // if existed
    assert.equal(JSON.stringify(node), '{"left":{"value":6},"value":7}');


    node = root.search(100); // if existed
    assert.equal(JSON.stringify(node), '{"right":{"right":{"value":175},"value":150},"value":100}');

    node = root.search(50); // if existed
    assert.equal(JSON.stringify(node),
      '{"left":{"left":{"left":{"value":6},"value":7},"right":{"value":10},"value":8},"right":{"right":{"right":{"value":175},"value":150},"value":100},"value":50}');

  });


  


});