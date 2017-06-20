/**
 * Created by mincheung on 18/06/2017.
 */
// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-mutations/16025
function mutation1(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}

console.log(mutation1(["hello", "hey"])); // false
console.log(mutation1(["Alien", "line"])); // true


function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function (letter) {
            return arr[0].toLowerCase()
                    .indexOf(letter) != -1;
        });
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Alien", "line"])); // true