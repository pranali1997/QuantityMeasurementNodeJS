const assert=require('chai').assert;
const quantityMeasure=require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it('0 feet should be equal to 0 feet',function(){
        assert.equal(0,quantityMeasure.unitMeasurement("feet","inch",0));
    }),
    it('0 inch should be equal to 0 inch',function(){
        assert.equal(0,quantityMeasure.unitMeasurement("inch","inch",0));
    }),
    it('1 feet should be equal to 12 inch',function(){
        assert.equal(12,quantityMeasure.unitMeasurement("feet","inch",1));
    }),
    it('feet value should be a number',function(){
        assert.isNotNaN(quantityMeasure.unitMeasurement("feet","inch",1));
    }),
    it('12 inch should be a equal to 1 feet',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("inch","feet",12));
    })
    it('1 inch should be a equal to 1 inch',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("inch","inch",1));
    }),
    it('checking for reference',function(){
        assert.isDefined("defined",quantityMeasure.unitMeasurement("feet","inch",1));
    }),
    it('3 feet should be a equal to 1 yard',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("feet","yard",3));
    }),
    it('1 feet should not be a equal to 1 yard',function(){
        assert.notEqual(1,quantityMeasure.unitMeasurement("feet","yard",1));
    }),
    it('1 inch should not be a equal to 1 yard',function(){
        assert.notEqual(1,quantityMeasure.unitMeasurement("yard","inch",1));
    }),
    it('1 yard should be a equal to 36 inch',function(){
        assert.equal(36,quantityMeasure.unitMeasurement("yard","inch",1));
    })
    it('36 inch should not be a equal to 1 yard ',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("inch","yard",36));
    }),
    it('1 yard should be a equal to 3 feet',function(){
        assert.equal(3,quantityMeasure.unitMeasurement("yard","feet",1));
    })
})