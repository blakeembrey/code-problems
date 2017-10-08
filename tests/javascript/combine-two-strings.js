var expect = require('chai').expect;
var combineTwoStrings = require('../../solutions/javascript/combine-two-strings');

describe('it tests combine two strings function', function(){
  var str1 = 'abc';
  var str2 = 'def';
  var str3valid = 'dabecf';
  var str3invalid = 'dabfce';

  it("it tests that f('" + str1 + "," +str2 + ",'" +str3valid + "')' is valid " , function(){
    var result = combineTwoStrings(str1, str2, str3valid);
    expect(result).to.be.true;
  });

  it("it tests that f('" + str1 + "," +str2 + ",'" +str3invalid + "')' is invalid " , function(){
    var result = combineTwoStrings(str1, str2, str3invalid);
    expect(result).to.be.false;
  });

});
