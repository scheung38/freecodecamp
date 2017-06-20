/**
 * Created by mincheung on 17/06/2017.
 */
// https://stackoverflow.com/questions/17386774/javascript-find-longest-word-in-a-string
function findLongestWord(string) {
    var str = string.split(' ');
    var count = 0;
    var word = null;

    // Compare words in sequence to array value
    // If first is greater than empty array -> first goes
    // into array.
    //
    // Else do nothing
    //
    // Then move down the line
    //
    // When no more, count the length of array, which is the largest

    str.forEach(function (x) {
        if (x.length > count) {
            count = x.length;
            word = x;
        }
    });

    return word.length;
}






module.exports = {findLongestWord};