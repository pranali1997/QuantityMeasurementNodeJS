const assert=require('chai').assert;
const unitAddition=require('../app/QuantityMeasurement.js');

describe('Addition Of Two Units',function(){
    it('addition of inch and inch should be in inch',function(){
    assert.equal(4,unitAddition.additionOFMeasurement("INCH",2,"INCH",2,"INCH"))
    }),
    it('addition of 1 gallon and 3.78 litres should return 7.57 litres',function(){
        assert.equal(7.56,unitAddition.additionOFMeasurement("GALLON",1,"LITRE",3.78,"LITRE"))
    }),
    it('addition of 1 litre and 1000 milliliter should return 2 litres',function(){
        assert.equal(2,unitAddition.additionOFMeasurement("LITRE",1,"MILLILITER",1000,"LITRE"))
    })

})