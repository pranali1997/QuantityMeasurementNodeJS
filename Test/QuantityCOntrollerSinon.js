assert=require('chai').assert;
sinon=require('sinon');
var quantityMeasurementController = require('../app/QuantityMeasurementController')
var quantityMeasurementService = require('../app/QuantityMeasurementService')



describe('main', function () {
    beforeEach(function () {
        const sandbox = sinon.createSandbox()
        sinon.stub(quantityMeasurementService, 'unitMeasurement').yields(null,2)
    })

    afterEach(function () {
        quantityMeasurementService.unitMeasurement.restore();
    })

    describe('quantity measurement', function () {
        it('1 inch should be equal to 1 inch', function () {
            var feet=quantityMeasurementController.unitMeasurement("FEET","FEET",1)            
            assert.equal(2,feet)
        })
    })
})