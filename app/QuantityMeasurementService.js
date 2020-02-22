var quantityJSON = require('./qauntityTypes');


module.exports = {
    unitMeasurement(unitType1, unitType2, unitValue, callback) {
        var result, input = unitValue;

        var keys = Object.keys(quantityJSON.quantityJson()[0]);
        

        for (var i = 0; i < keys.length; i++) {

            if (keys[i] == unitType2) {

                var unitKeys = Object.keys(quantityJSON.quantityJson()[0][keys[i]])                

                
                for (var j = 0; j < unitKeys.length; j++) {
                    
                    if (unitKeys[j] == unitType1) {

                        result=quantityJSON.quantityJson()[0][keys[i]][unitType1]*input;
                                                
                    }
                }
            }

        }

        return callback(null, result);
    }

}
