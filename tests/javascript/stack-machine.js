var assert       = require('assert');
var stackMachine = require('../../problems/stack-machine/stack-machine');

describe('stack machine', function () {
  it('should correctly evaluate the two example problems', function () {
    assert.equal(stackMachine('13+62*7+*'), 76);
    assert.equal(stackMachine('11++'),      -1);
  });

  it('should return the top number from the stack', function() {
    for (var i = 0; i < 10; i++) {
      assert.equal(stackMachine(i.toString()), i,
        stackMachine(i.toString()) + ' == ' + i + '\n     Input: ' + i.toString());
    }
    assert.equal(stackMachine('0123456789'),   9);
    assert.equal(stackMachine('123456*****0'), 0);
  });

  it('should add two numbers from the top of the stack', function() {
    assert.equal(stackMachine('11+'),   2);
    assert.equal(stackMachine('111++'), 3);
    assert.equal(stackMachine('11+1+'), 3);
    assert.equal(stackMachine('0123456789++++++++'), 45);
  });

  it('should multiply two numbers from the top of the stack', function() {
    assert.equal(stackMachine('01*'),    0,
      stackMachine('01*') + ' == 0\n     Input: 01*');
    assert.equal(stackMachine('11*'),    1);
    assert.equal(stackMachine('248**'), 64);
    assert.equal(stackMachine('24*8*'), 64);
    assert.equal(stackMachine('123456*****'), 720);
    assert.equal(stackMachine('0123456******'), 0);
  });

  it('should return -1 when the stack is empty', function() {
    assert.equal(stackMachine(''),   -1);
    assert.equal(stackMachine('+'),  -1);
    assert.equal(stackMachine('*'),  -1);
    assert.equal(stackMachine('0+'), -1);
    assert.equal(stackMachine('0*'), -1);
    assert.equal(stackMachine('12345*****'), -1);
  });

  it('should return -1 when 12-bit stack-machine overflows', function () {
    // 12-bit unsigned integers range from 0 to 4095, anything higher is overflow

    // 65 * 64 + 1 = 4095 + 1 = 4096 > 4095
    assert.equal(stackMachine('88*1+97**1+'), -1,
      stackMachine('88*1+97**1+') + ' == -1\n     Input: 88*1+97**1+');

    // 4095 + 4095 = 8190 > 4095
    assert.equal(stackMachine('88*1+97**88*1+97**+'), -1,
      stackMachine('88*1+97**88*1+97**+') + ' == -1\n     Input: 88*1+97**88*1+97**+');

    // 64 * 64 = 4096 > 4095
    assert.equal(stackMachine('88*88**'), -1,
      stackMachine('88*88**') + ' == -1\n     Input: 88*88**');

    // 4095 * 4095 = 16769025 > 4095
    assert.equal(stackMachine('88*1+97**88*1+97***'), -1,
      stackMachine('88*1+97**88*1+97***') + ' == -1\n     Input: 88*1+97**88*1+97***');
  });
});
