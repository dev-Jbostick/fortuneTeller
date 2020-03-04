//This is a fortuneTeller storyline to tell my future.
let numOfKids = 3;
let bae = "Drake";
let location = "Saint Martin";
let jobTitle = "Web Developer";

let future = "You will be a " + jobTitle + " married to " + bae + " with " + numOfKids + " kids living in " + location;

console.log(future);

//The Age Caclculator
let currentYear = 2020
let birthYear = 1990;
let futureYear = 2030;

let age = currentYear - birthYear;
let possibleAge = currentYear - birthYear - 1;

console.log("You will be " + age + " or " + possibleAge + " years old. Depending on the month");

//Lifetime supply calculator
let currentAge = 29;
let maxAge = 108;
let estAmountPerDay = 5;

let supply = (estAmountPerDay * 365) * (maxAge - currentAge)


console.log("You will need " + supply + " snacks to last until you are " + maxAge + " years old." + " You can have up to " + estAmountPerDay + " per day.")

// The Geometrizer
radius = 3;
circumference = (3.14 * radius);
circleArea = ((radius * radius) * 3.14);

console.log("The circumference is: " + circumference + ". And the area is: " + circleArea + ".")

//Temperature Converter
celsiusTemp = 30;
farenheitTemp = 86;

convertToFahrenheit =((celsiusTemp * 9/5) + 32);
convertToCelsius = ((farenheitTemp * 5/9) - 32);
console.log(celsiusTemp + " degrees Celsius is equal to " + convertToFahrenheit + " degrees farenheit" );

console.log(farenheitTemp + " degrees fahrenheit is equal to " + convertToCelsius);