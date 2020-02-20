//no need to import jest

const calc = require('../calculator.js');


describe('addition/subtraction', () => { //aa
  it('returns the sum of two nums', () => { //b
    // let valA = 2;
    // let valB = 2;
    // let expectedResult = 4;
    // let result = calc.add(valA, valB);
    // expectedResult(result).toBe(expectedResult);
    expect(calc.add(2,2)).toBe(4);
    expect(calc.add(3,5)).toBe(8);
  });
  
  it('subtracts two nums', () => {
    expect(calc.subtract(5,3)).toBe(2);
    expect(calc.subtract(5,1)).not.toBe(7);
  });  
});


describe('multiples', () => {
  it('multiplies two nums', () => {
    expect(calc.multiply(5,10)).toBe(50);
  });
  
  it('divides two nums', () => {
    expect(calc.divide(10,5)).toBe(2);
  });
});

//a - 'just a way to groupe tests that are related to each other, this is not requried, but makes for better readability.

//b - 'it' and 'test' can be used interchangably here.

//red/green testing: write the code first, have it reviewed so you know it will hold up against code. The tests will run red (or fail) because there's nothing to run it against. THEN you write the code to make the code run green (or pass). Then you can focus on improving it if need be.