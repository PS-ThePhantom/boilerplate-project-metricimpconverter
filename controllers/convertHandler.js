function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    input = input.split(/[a-zA-Z]/)[0];
    if (input === "") {
      result = 1;
    } else {
      input = input.split("/");
      
      if (input.length > 2) result = "invalid number";
      else if (input.length === 2){
        result = Number(input[0]) / Number(input[1]);
        
        if (isNaN(result)) result = "invalid number";
      }
      else result = Number(input[0]);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    input = input.split(/[0-9]/);
    input = input[input.length-1];

    switch (input.toLowerCase()) {
      case "gal":
      case "l":
      case "lbs":
      case "kg":
      case "mi":
      case "km":
        result = input.toLowerCase();
        break;
      default:
        result = "invalid unit";
    }
    
    if (result === "l") result = "L";

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    initUnit = initUnit.toLowerCase();

    if(initUnit === "invalid unit") result = "invalid unit";
    else if (initUnit === "gal") result = "L";
    else if (initUnit === "l") result = "gal";
    else if (initUnit === "lbs") result = "kg";
    else if (initUnit === "kg") result = "lbs";
    else if (initUnit === "mi") result = "km";
    else if (initUnit === "km") result = "mi";
    else result = "invalid unit";
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    unit = unit.toLowerCase();

    if(unit === "invalid unit") result = "invalid unit";
    else if(unit === "gal") result = "gallons";
    else if(unit === "l") result = "liters";
    else if(unit === "lbs") result = "pounds";
    else if(unit === "kg") result = "kilograms";
    else if(unit === "mi") result = "miles";
    else result = "kilometers";
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    initUnit = initUnit.toLowerCase();

    if(initNum === "invalid number" && initUnit === "invalid unit") result = "invalid number and unit";
    else if(initNum === "invalid number") result = "invalid number";
    else if(initUnit === "invalid unit") result = "invalid unit";
    else if(initUnit === "gal") result = initNum * galToL;
    else if(initUnit === "l") result = initNum / galToL;
    else if(initUnit === "lbs") result = initNum * lbsToKg;
    else if(initUnit === "kg") result = initNum / lbsToKg;
    else if(initUnit === "mi") result = initNum * miToKm;
    else result = initNum / miToKm;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if(initNum === "invalid number" && initUnit === "invalid unit") result = "invalid number and unit";
    else if(initNum === "invalid number") result = "invalid number";
    else if(initUnit === "invalid unit") result = "invalid unit";
    else result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
