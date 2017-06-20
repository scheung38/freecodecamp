/**
 * Created by mincheung on 18/06/2017.
 */
// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-falsy-bouncer/16014
function bouncer(arr) {

    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
