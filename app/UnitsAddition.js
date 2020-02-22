var quantityMeasurement=require('./QuantityMeasurementService');

module.exports={
    additionOFMeasurement(unitType1, unitValue1, unitType2, unitValue2, unitType3) {
        value1 = quantityMeasurement.unitMeasurement(unitType1, unitType3, unitValue1);
        value2 = quantityMeasurement.unitMeasurement(unitType2, unitType3, unitValue2);
        unitAddition = value1 + value2;
        return unitAddition;
    }
}