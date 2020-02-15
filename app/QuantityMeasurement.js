var quantityJSON=require('../app/Quantities.json');
module.exports = {
    unitMeasurement(unitType1, unitType2, unitValue) {
            var unitTypes = ["feet", "inch","yard"];
            var result, input = unitValue;

            if (unitTypes[0] == unitType1 && unitTypes[1] == unitType2) {
                    result = quantityJSON.LENGTH.FEET*input;
                    console.log(quantityJSON.LENGTH.FEET);
                    
                
                return result;
            }
            if (unitTypes[1] == unitType1 && unitTypes[0] == unitType2) {
                    result = parseFloat(input / quantityJSON.LENGTH.FEET);
                
                return result;
            }
            if(unitType1==unitTypes[0] && unitType2==unitTypes[2]){
                    result=parseFloat(input/3);
                
                return result;
            }
            if(unitType1==unitTypes[2] && unitType2==unitTypes[0]){
                result=input*3;

                return result;
            }
            if(unitType1==unitTypes[2] && unitType2==unitTypes[1]){
                result=input*quantityJSON.LENGTH.YARD;
                return result;
            }
            if(unitType1==unitTypes[1] && unitType2==unitTypes[2]){
                result=input/quantityJSON.LENGTH.YARD;
                return result;
            }
            else {
                result = 1 * input;
            }
        
        return result;

    }

}