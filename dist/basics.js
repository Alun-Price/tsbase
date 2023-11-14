"use strict";
function addNums(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const resultPhrase = "Result is: ";
addNums(number1, number2, true, resultPhrase);
