/**
 * Created by mincheung on 17/06/2017.
 */
// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-return-largest-numbers-in-arrays/16042
function largestOfFour(arr) {
    // You can do this!
    return arr.map(Function.apply.bind(Math.max, null));
    // return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// [ 5, 27, 39, 1001 ]
