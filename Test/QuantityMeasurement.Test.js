const assert=require('chai').assert;
const quantityMeasure=require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it('0 feet should be equal to 0 feet',function(){
        assert.equal(quantityMeasure.unitMeasurement("feet",0),0);
    }),
    it('0 inch should be equal to 0 inch',function(){
        assert.equal(quantityMeasure.unitMeasurement("inch",0),0);
    }),
    it('1 feet should be equal to 12 inch',function(){
        assert.equal(quantityMeasure.unitMeasurement("feet",1),12);
    })
    it('feet value should be a number',function(){
        assert.typeOf(quantityMeasure.unitMeasurement("feet",1),'Number');
    })
})