// lower case //
var personName = "Raffat Alam ";
console.log('lowercase:', personName.toLowerCase());
// UPPER CASE//
console.log('uppercase:', personName.toLocaleUpperCase());
// Title case //
console.log('titlecase:', personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
