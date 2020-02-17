var quantityJSON = require('../app/Quantities.json');


module.exports = {
    unitMeasurement(unitType1, unitType2, unitValue) {
        var result, input = unitValue;

        var keys = Object.keys(quantityJSON);

        for (var i = 0; i < keys.length; i++) {

            if (keys[i] == unitType2) {
                var unitKeys = Object.keys(quantityJSON[keys[i]])
                for (var j = 0; j < unitKeys.length; j++) {
                    if (unitKeys[j] == unitType1) {                        
                        result = quantityJSON[keys[i]][unitKeys[j]] * input;                        
                        var result1 = Math.round(result);                        
                    }
                }
            }

        }

        return result;
    },

    additionOFMeasurement(unitType1,unitValue1,unitType2,unitValue2,unitType3){
        value1=this.unitMeasurement(unitType1,unitType3,unitValue1);        
        value2=this.unitMeasurement(unitType2,unitType3,unitValue2);        
        unitAddition=value1+value2;        
        return unitAddition;
    }

}
