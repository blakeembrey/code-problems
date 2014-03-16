var assert = require('assert');
var isBST  = require('../../solutions/javascript/binary-search-tree-check');

var pass = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1
    },
    right: {
      value: 6,
      left: {
        value: 4
      },
      right: {
        value: 7
      }
    }
  },
  right: {
    value: 10,
    right: {
      value: 14,
      left: {
        value: 13
      }
    }
  }
};

var failLeft = {
  value: 10,
  left: {
    value: 8,
    left: {
      value: 9
    },
    right: {
      value: 10
    }
  },
  right: {
    value: 12
  }
};

var failRight = {
  value: 22,
  left: {
    value: 19
  },
  right: {
    value: 29,
    left: {
      value: 26
    },
    right: {
      value: 27
    }
  }
};

var failDuplicate = {
  value: 13,
  left: {
    value: 10,
    left: {
      value: 7
    },
    right: {
      value: 13
    }
  },
  right: {
    value: 15
  }
};

var bstFalse = {
  value: 3,
  left: {
    value: 2,
    right: {
      value: 10
    }
  },
  right: {
    value: 5
  }
};

describe('binary search tree check', function () {
  it('should pass a valid binary search tree', function () {
    assert.ok(isBST(pass));
  });

  it('should fail with a left subtree that is greater', function () {
    assert.ok(!isBST(failLeft));
  });

  it('should fail with a right subtree that is smaller', function () {
    assert.ok(!isBST(failRight));
  });

  it('should fail with duplicate nodes', function () {
    assert.ok(!isBST(failDuplicate));
  });

  it('should fail with bstFalse', function () {
    assert.ok(!isBST(bstFalse));
  });
});
