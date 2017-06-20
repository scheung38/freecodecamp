/**
 * Created by mincheung on 17/06/2017.
 */
// https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac
function confirmEnding(string, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    if (string.substr(-target.length) === target) {
        // Step 2. Return a boolean (true or false)
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n")); // true
