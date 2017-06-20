/**
 * Created by mincheung on 17/06/2017.
 */
// https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

// I'm A Little Tea Pot