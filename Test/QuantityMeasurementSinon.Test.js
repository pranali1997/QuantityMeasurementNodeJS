var assert=require('chai').assert;
var quantityMeasurement=require('../app/QuantityMeasurement').unitMeasurement;
var sinon=require('sinon');
var jsonFile=require('../app/Quantities.json')

let unitTypes={
    measurement:{
        "INCH":
        {
            "FEET": 12,
            "INCH": 1,
            "YARD": 36,
            "CENTIMETER": 0.393701
        }
    }
}

describe('quantity measurement',function(){
    beforeEach(function(){
        res=sinon.stub(jsonFile,"quantityJson").returns(unitTypes);
    });
    it('feet to inch',function(){
        feet=quantityMeasurement("FEET","INCH",1)
        assert.equal(feet,12);
        jsonFile.quantityJson.restore();
    })
    

    })
    
// describe("quantity measurements ", function () {
// let QuantityMeasure={
//     measure: {
//     "INCH":
//     {
//         "FEET" :12,
//     }
// }
// }
// it("should send 12 when converted of feet to inch", function () {

// const measure=sinon.stub(QuantityMeasure,"measure").returns(12)
// console.log(QuantityMeasure.measure);

// let req={
//     QuantityMeasure:QuantityMeasure
    
// }

// // Have `res` have a send key with a function value coz we use `res.send()` in our func
// let res={
//     result:sinon.spy()
// }

// quantityMeasurement.unitMeasurement("FEET","INCH",1)
// // var keys = Object.keys(jsonFile);
// // var unitKeys = Object.keys(jsonFile[keys[i]])
// // var result1 = jsonFile[keys[i]][unitKeys[j]]
// expect(res.result.callOnce).to.equal(result1); 
// expect(res.result.firstCall.args[0].to.equal(12)); 
// expect(measure.callOnce).tp.equal(12);

//     })
// })