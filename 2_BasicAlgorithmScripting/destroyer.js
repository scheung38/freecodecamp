/**
 * Created by mincheung on 18/06/2017.
 */

// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-seek-and-destroy/16046
function destroyer(arr) {
    // Remove all the values

    var args = Array.from(arguments).slice(1);
    console.log(args);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));  // [ 1, 1 ], args = [ 2, 3 ]
console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 4));  // [ 1, 2, 3, 1, 2, 3 ], args = [ 4 ]