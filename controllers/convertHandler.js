function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    input = input.split(/[a-zA-Z]/)[0];
    if (input === "") {
      result = 1;
    } else {
      input = input.split("/");
      
      if (input.length > 2) result = "invalid number";
      else if (input.length === 2) result = Number(input[0]) / Number(input[1]);
      else result = Number(input[0]);
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
