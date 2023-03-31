// app.js file content
console.log("Hello World")

const sum = (a , b) => a + b;
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euros) => euros * oneEuroIs.USD;
const fromDollarToYen = (dollars) => (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
const fromYenToPound = (yens) => (yens / oneEuroIs.JPY) * oneEuroIs.GBP;

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};