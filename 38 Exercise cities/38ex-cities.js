/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
function discribe_city(city, country) {
    if (country === void 0) { country = 'Default country.'; }
    console.log("".concat(city, " is in ").concat(country));
}
discribe_city('Karachi', 'Pakistan.');
discribe_city('jaddah', 'Saudi Arabia.');
discribe_city('Palistian');
