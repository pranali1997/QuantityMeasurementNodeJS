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
        var feetValue=Math.round(quantityMeasure.unitMeasurement("INCH","FEET",12));
        assert.equal(1,feetValue);
    })
    it('1 inch should be a equal to 1 inch',function(){
        assert.equal(1,quantityMeasure.unitMeasurement("INCH","INCH",1));
    }),
    it('checking for reference',function(){
        assert.isDefined("defined",quantityMeasure.unitMeasurement("FEET","INCH",1));
    }),
    it('3 feet should be a equal to 1 yard',function(){
        var yardValue=Math.round(quantityMeasure.unitMeasurement("FEET","YARD",3));
        assert.equal(1,yardValue);
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
        var yardValue=Math.round(quantityMeasure.unitMeasurement("INCH","YARD",36));
        assert.equal(1,yardValue);
    }),
    it('1 yard should be a equal to 3 feet',function(){
        assert.equal(3,quantityMeasure.unitMeasurement("YARD","FEET",1));
    }),
    it('2 inch should be equal to 5 centimeter',function(){
        assert.equal(5,quantityMeasure.unitMeasurement("INCH","CENTIMETER",2));
    }),
    it('1 gallon should be equal to 3.78 litres',function(){
        assert.equal(3.78,quantityMeasure.unitMeasurement("GALLON","LITRE",1));
    }),
    it('1 kilogram should be equal to 1000 grams',function(){
        assert.equal(1000,quantityMeasure.unitMeasurement("KILOGRAM","GRAM",1))
    }),
    it('1 tonne should be equal to 1000 kilogram',function(){
        assert.equal(1000,quantityMeasure.unitMeasurement("TONNE","KILOGRAM",1))
    }),
    it('212 fahrenheit should be equal to 100 celsius',function(){
        assert.equal(212,quantityMeasure.unitMeasurement("FAHRENHEIT","CELSIUS",100))
    }),
    it('100 fahrenheit should be equal to 212 celsius',function(){
        var celsiusValue=Math.round(quantityMeasure.unitMeasurement("CELSIUS","FAHRENHEIT",212));
        assert.equal(100,celsiusValue)
    }),
    it('if feet value converted into kilogram should return undefined',function(){
        assert.equal(undefined,quantityMeasure.unitMeasurement("FEET","KILOGRAM",1))
    }),
    it('if feet value converted into celsius should return undefined',function(){
        assert.equal(undefined,quantityMeasure.unitMeasurement("FEET","CELSIUS",1))
    }),
    it('if gallon value converted into yard should return undefined',function(){
        assert.equal(undefined,quantityMeasure.unitMeasurement("GALLON","YARD",1))
    }),
    it('if gram value converted into fahrenheit should return undefined',function(){
        assert.equal(undefined,quantityMeasure.unitMeasurement("GRAM","FAHRENHEIT",1))
    })

})