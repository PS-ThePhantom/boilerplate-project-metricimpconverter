const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole number input', function(){
        assert.equal(convertHandler.getNum('32L'), 32);
    });
    test('Decimal number input', function(){
        assert.equal(convertHandler.getNum('32.5L'), 32.5);
    });
    test('Fractional input', function(){
        assert.equal(convertHandler.getNum('1/2L'), 0.5);
    });
    test('Fractional input with decimal', function(){
        assert.equal(convertHandler.getNum('1.5/2L'), 0.75);
    });
    test('No numerical input', function(){
        assert.equal(convertHandler.getNum('L'), 1);
    });
    test('Invalid input', function(){
        assert.equal(convertHandler.getNum('2/2/2'), 'invalid number');
    });
    test('Gal input', function(){
        assert.equal(convertHandler.getUnit('32gal'), 'gal');
    });
    test('L input', function(){
        assert.equal(convertHandler.getUnit('32L'), 'L');
    });
    test('Lbs input', function(){
        assert.equal(convertHandler.getUnit('32lbs'), 'lbs');
    });
    test('Kg input', function(){
        assert.equal(convertHandler.getUnit('32kg'), 'kg');
    });
    test('Mi input', function(){
        assert.equal(convertHandler.getUnit('32mi'), 'mi');
    });
    test('Km input', function(){
        assert.equal(convertHandler.getUnit('32km'), 'km');
    });
    test('Invalid input', function(){
        assert.equal(convertHandler.getUnit('32m'), 'invalid unit');
    });
    test('Gal return unit', function(){
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    });
    test('L return unit', function(){
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    });
    test('Lbs return unit', function(){
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    });
    test('Kg return unit', function(){
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    });
    test('Mi return unit', function(){
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
    test('Km return unit', function(){
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    });
    test('Invalid return unit', function(){
        assert.equal(convertHandler.getReturnUnit('m'), 'invalid unit');
    });

});