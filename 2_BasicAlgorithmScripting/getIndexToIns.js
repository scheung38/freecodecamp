/**
 * Created by mincheung on 18/06/2017.
 */

// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-where-do-i-belong/16094

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    // return num;
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);


}

console.log(getIndexToIns([40, 60], 50));  // 1
console.log(getIndexToIns([20, 30, 40, 60], 35));  // 2
console.log(getIndexToIns([20, 30, 40, 60], 45));  // 3