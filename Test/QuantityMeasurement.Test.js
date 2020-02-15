const assert=require('chai').assert;
const quantityMeasure=require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it('0 feet should be equal to 0 feet',function(){
        assert.equal(0,quantityMeasure.unitMeasurement("FEET","INCH",0));
    }),
    it('0 inch should be equal to 0 inch',function(){
        assert.equal(0,quantityMeasure.unitMeasurement("INCH","INCH",0));
    }),
    it('1 feet should be equal to 12 inch',function(){
        assert.equal(12,quantityMeasure.unitMeasurement("FEET","INCH",1));
    }),
    it('feet value should be a number',function(){
        assert.isNotNaN(quantityMeasure.unitMeasurement("FEET","INCH",1));
    }),
    it('12 inch should be a equal to 1 feet',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("INCH","FEET",12));
    })
    it('1 inch should be a equal to 1 inch',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("INCH","INCH",1));
    }),
    it('checking for reference',function(){
        assert.isDefined("defined",quantityMeasure.unitMeasurement("FEET","INCH",1));
    }),
    it('3 feet should be a equal to 1 yard',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("FEET","YARD",3));
    }),
    it('1 feet should not be a equal to 1 yard',function(){
        assert.notEqual(1,quantityMeasure.unitMeasurement("FEET","YARD",1));
    }),
    it('1 inch should not be a equal to 1 yard',function(){
        assert.notEqual(1,quantityMeasure.unitMeasurement("YARD","INCH",1));
    }),
    it('1 yard should be a equal to 36 inch',function(){
        assert.equal(36,quantityMeasure.unitMeasurement("YARD","INCH",1));
    })
    it('36 inch should not be a equal to 1 yard ',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("INCH","YARD",36));
    }),
    it('1 yard should be a equal to 3 feet',function(){
        assert.equal(3,quantityMeasure.unitMeasurement("YARD","FEET",1));
    }),
    it('2 inch should be equal to 5 centimeter',function(){
        assert.equal(5,quantityMeasure.unitMeasurement("INCH","CENTIMETER",2));
    })
})