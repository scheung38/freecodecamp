/**
 * Created by mincheung on 17/06/2017.
 */
// https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

function test(a,b) {
    return a + b;
}

module.exports = { palindrome, test };


// console.log(palindrome("_eye"));
// console.log(palindrome("eye"));
// console.log(test(1,2));
