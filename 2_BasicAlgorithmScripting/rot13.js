/**
 * Created by mincheung on 18/06/2017.
 */

function rot13(str) {
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP

// https://github.com/freeCodeCamp/freeCodeCamp/issues/10927
//
// var myStr; // Change this line
//
// myStr = "FirstLine\n\\SecondLine\\\rThirdLine";