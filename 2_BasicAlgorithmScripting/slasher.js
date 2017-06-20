/**
 * Created by mincheung on 18/06/2017.
 */
// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-slasher-flick/16047
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany)
}

console.log(slasher([1, 2, 3], 2));  // [ 3 ]
