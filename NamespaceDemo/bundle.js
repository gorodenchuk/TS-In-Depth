var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path = "utility-functions.ts"/>
var result1 = Utility.Fees.calculateLateFee(3);
var result2 = Utility.maxBooksAllowed(10);
console.log(result1, result2);
var util = Utility.Fees;
var result3 = util.calculateLateFee(0);
console.log(result3);
