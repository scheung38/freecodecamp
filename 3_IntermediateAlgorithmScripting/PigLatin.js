// https://stackoverflow.com/questions/36641249/javascript-vowell-or-consonant-function
// http://jsfiddle.net/VsYv5/1/
function translatePigLatin(str) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(str[0]) >= 0) {
        return str.concat('way');
    }
    else {
        for (var i = 0; i < str.length; i++) {
            var str = str.substr(1) + str.substr(0, 1);
            if (vowels.indexOf(str[0]) >= 0) {
                break;
            }
        }
        return str.concat('ay');
    }
}

// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-pig-latin/16039
// function translatePigLatin(str) {
//     function check(obj) {
//         return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
//     }
//
//     return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
// }

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));