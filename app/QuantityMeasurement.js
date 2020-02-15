var quantityJSON=require('../app/Quantities.json');



module.exports = {
    unitMeasurement(unitType1, unitType2, unitValue) {
            var result, input = unitValue;

            var keys=Object.keys(quantityJSON);

            for(var i=0;i<keys.length;i++){
                
             if(keys[i]==unitType2){
                var something=Object.keys(quantityJSON[keys[i]])
                for(var j=0;j<something.length;j++){
                    if(something[j]==unitType1){
                        
                        result=quantityJSON[keys[i]][something[j]]*input;
                        var result1 = Math.round(result);
                    }
                }
            }
            
        }

        return result1;
    }

    }
    