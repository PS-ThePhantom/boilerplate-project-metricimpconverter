'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      let result;

      if(string[0] === 'i') result = string;
      else result = {
        initNum: Number(initNum),
        initUnit: initUnit,
        returnNum: Number(returnNum.toFixed(5)),
        returnUnit: returnUnit,
        string: string
      };
      
      res.json(result);
    });

};
