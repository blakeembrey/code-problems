var stackMachine = require('../stack-machine/stack-machine'),
    assert       = require('assert');

describe('stackMachine', function () {
  it('should return -1 when 12-bit stack-machine overflows', function () {
    // 12-bit unsigned integers range from 0 to 4095, anything higher is overflow

    // 65 * 64 + 1 = 4095 + 1 = 4096 > 4095
    assert.equal(stackMachine.solution('88*1+97**1+'), -1);

    // 4095 + 4095 = 8190 > 4095
    assert.equal(stackMachine.solution('88*1+97**88*1+97**+'), -1);

    // 64 * 64 = 4096 > 4095
    assert.equal(stackMachine.solution('88*88**'), -1);

    // 4095 * 4095 = 16769025 > 4095
    assert.equal(stackMachine.solution('88*1+97**88*1+97***'), -1);
  });
});
