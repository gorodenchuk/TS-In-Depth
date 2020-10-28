/// <reference path = "utility-functions.ts"/>

const result1 =  Utility.Fees.calculateLateFee(3);
const result2 =  Utility.maxBooksAllowed(10);
console.log(result1, result2);

import util = Utility.Fees;
const result3 = util.calculateLateFee(0);
console.log(result3);