var assert = require('assert'),
    Stack = require('../stack/stack.js').Stack,
    StackError = require('../stack/stack.js').StackError;

describe('Stack', function () {

  describe('#push()', function () {
    it('should return the length of stack after push', function () {
      var stack = new Stack();
      assert.strictEqual(stack.push(2013), 1);
      assert.strictEqual(stack.push(0.0629), 2);
      assert.strictEqual(stack.push(null), 3);
      assert.strictEqual(stack.push(undefined), 4);
    });
  });

  describe('#pop()', function () {
    it('should throw StackError if empty', function () {
      var stack = new Stack();
      assert.throws( function () { stack.pop(); }, StackError);
    });

    it('should delete the top-node and return the value of it', function () {
      var stack = new Stack();
      stack.push(2013);
      stack.push(0.0629);
      stack.push(null);
      stack.push(undefined);
      assert.strictEqual(stack.pop(), undefined);
      assert.strictEqual(stack.pop(), null);
      assert.strictEqual(stack.pop(), 0.0629);
      assert.strictEqual(stack.pop(), 2013);
    });
  });
});
