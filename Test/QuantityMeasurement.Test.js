const assert=require('chai').assert;
const quantityMeasure=require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it('0 feet should be equal to 0 feet',function(){
        assert.equal(quantityMeasure.unitMeasurement("feet","inch",0),0);
    }),
    it('0 inch should be equal to 0 inch',function(){
        assert.equal(0,quantityMeasure.unitMeasurement("inch","inch",0));
    }),
    it('1 feet should be equal to 12 inch',function(){
        assert.equal(12,quantityMeasure.unitMeasurement("feet","inch",1),12);
    })
    it('feet value should be a number',function(){
        assert.typeOf(quantityMeasure.unitMeasurement("feet","inch",1),'Number');
    })
    it('12 inch should be a equal to 1 feet',function(){
        assert.equal(quantityMeasure.unitMeasurement("inch","feet",12),1);
    })
})