var quantityJSON = require('./qauntityTypes');
var quantityMeasurementService = require('./QuantityMeasurementService');

module.exports = {
    unitMeasurement(unitType1, unitType2, unitValue) {
        // var result
        return quantityMeasurementService.unitMeasurement(unitType1, unitType2, unitValue, ((err, data) => {
            if (err) {
                return false
            }
            // result = data
            return data
        }))
        // return data
    }
}