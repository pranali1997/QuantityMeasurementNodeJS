var assert = require('chai').assert;
var quantityMeasurement = require('../app/quantityMeasurementController');
var additionMeasure=require('../app/UnitsAddition');
var sinon = require('sinon');
var jsonFile = require('../app/jsonFile')

let unitTypes = [{
        "INCH":
        {
            "FEET": 12,
            "INCH": 1,
            "YARD": 36,
            "CENTIMETER": 0.393701
        },
        "FEET":
        {
            "FEET": 1,
            "INCH": 0.083333,
            "YARD": 3,
            "CENTIMETER": 0.0328084
        },
        "YARD":
        {
            "FEET": 0.3333,
            "INCH": 0.0277778,
            "YARD": 1,
            "CENTIMETER": 0.0109361
        },
        "CENTIMETER": {
            "FEET": 30.48,
            "INCH": 2.5,
            "YARD": 91.44,
            "CENTIMETER": 1
        }    
}]

describe("converting units", function () {
    beforeEach(function(){
        const sandbox = sinon.createSandbox()
        sinon.stub(jsonFile, 'quantityJson').returns(unitTypes)
    })

    afterEach(function(){
        jsonFile.quantityJson.restore();
    })
    
    //inches
    it("0 inch should return 0 inch", () => {
        var inch = quantityMeasurement.unitMeasurement("INCH", "INCH", 1);
        var inch1 = quantityMeasurement.unitMeasurement("INCH", "INCH", 1);
        assert.equal(inch, inch1);
    })

    //     //check feet to inch conversion
    it(" 1 feet equals 12 inch", () => {
        var feet = quantityMeasurement.unitMeasurement("FEET", "INCH", 1);
        var inch = quantityMeasurement.unitMeasurement("INCH", "INCH", 12);
        assert.equal(feet, inch);
    }),
    it('addition of 1 feet and 1 inch should return 13 in inch',()=>{
        var add=additionMeasure.additionOFMeasurement("FEET",1,"INCH",1,"INCH")
        assert.equal(add,13);
    })

})

