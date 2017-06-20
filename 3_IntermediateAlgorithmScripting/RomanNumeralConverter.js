/**
 * Created by mincheung on 19/06/2017.
 */
function convert(num) {
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if(num > 3999 || num < 0) return;

    // Step through the roman array, adding the roman numeral for the current index location x times.
    // Calculate x by rounding down the quotient of the number passed to the function (num) and the
    // arabic value at the same index location. Update num each time the quotient is greater than 0.
    var answer = roman.reduce(function (previousValue, currentValue, index) {
        var x = Math.floor(num / arabic[index]);
        num -= arabic[index] * x;
        return previousValue + currentValue.repeat(x);
    }, '');
    return answer;
}

console.log(convert(36)); // XXXVI
// console.log(convert(2000)); // MM
// console.log(convert(2017)); // MMXVII
