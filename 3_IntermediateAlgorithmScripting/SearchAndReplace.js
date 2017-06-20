// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
// http://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-1.php
function myReplace(str, before, after) {

    var regexp = /^[A-Z]/;

    if (regexp.test(arguments[1])) {

        var t = arguments[2][0].toUpperCase() + arguments[2].slice(1);

        return  str.replace(arguments[1], t);
    }

    return str.replace(arguments[1], arguments[2]);
}

console.log(myReplace("A quick brown fox Kumped over the lazy dog", "Kumped", "leaped"));