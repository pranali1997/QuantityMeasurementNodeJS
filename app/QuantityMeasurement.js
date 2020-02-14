module.exports = {

    unitMeasurement(unitType, unitValue) {
        var unitTypes = ["feet", "inch"];
        var result, input = unitValue;

        if (unitTypes[0] == unitType) {
            if (unitType == unitTypes[0]) {
                result = 12 * input;
            }
            else {
                result = 1 * input;
            }
        }
        if(unitTypes[1]==unitType){
            result=1*input;
        }

        return result;
    }
}