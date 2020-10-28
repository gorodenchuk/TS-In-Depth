/// <reference path = "utility-functions.ts"/>
var result1 = Utility.Fees.calculateLateFee(3);
var result2 = Utility.maxBooksAllowed(10);
console.log(result1, result2);
var util = Utility.Fees;
var result3 = util.calculateLateFee(0);
console.log(result3);
