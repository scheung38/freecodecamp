/**
 * Created by mincheung on 18/06/2017.
 */

// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-chunky-monkey/16005
    // Break it up.
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));  // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));  // [ [ 'a', 'b', 'c' ], [ 'd' ] ]