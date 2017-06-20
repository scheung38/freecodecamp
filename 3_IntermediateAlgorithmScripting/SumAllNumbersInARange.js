/**
 * Created by mincheung on 18/06/2017.
 */
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//     Here are some helpful links:
//
//     Math.max()
//     Math.min()

// Array.prototype.reduce()


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// For ES5
function sumAll(arr) {
    var sum = 0;
    var min =  arr.reduce(function (a, b) {
        return Math.min(a,b);
    });
    var max =  arr.reduce(function (a, b) {
        return Math.max(a,b);
    });

    for (min; min < max + 1; min++) {
        sum += min;
    }

    return sum;
}

console.log(sumAll([1, 4]));  // 10
console.log(sumAll([4, 1]));  // 10
console.log(sumAll([5, 10]));  // 45
console.log(sumAll([10, 5]));  // 45


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// ES6
function sumAll2(arr) {
    var sum = 0;
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    for (min; min < max + 1; min++) {
        sum += min;
    }

    return sum;
}

console.log(sumAll2([1, 4]));  // 10
console.log(sumAll2([4, 1]));  // 10
console.log(sumAll2([5, 10]));  // 45
console.log(sumAll2([10, 5]));  // 45
