// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// test #2
test("One euro should be 1.206 dollars", function(){
    // import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


// test #3
test("One Dollar should be 106.5833 yens ", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(100);

    // if 1 dollar is 106.5833 yesn, then 100 are 10658.33
    const expected = 10658.33; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(100)).toBeCloseTo(expected, 2);
})


// test #4
test("One Yen should be 0.00975 pounds ", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const yens = fromYenToPound(100);

    // if 1 yen is 0.00975 pounds, then 100 yens are 0.625 GBP
    const expected = 0.625; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(100)).toBeCloseTo(expected, 3);
})