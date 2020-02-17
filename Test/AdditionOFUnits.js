const assert=require('chai').assert;
const unitAddition=require('../app/QuantityMeasurement.js');

describe('Addition Of Two Units',function(){
    it('addition of inch and inch should be in inch',function(){
    assert.equal(4,unitAddition.additionOFMeasurement("INCH",2,"INCH",2,"INCH"))
})
})