/**
 * Created by mincheung on 18/06/2017.
 */

// https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }

    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

// A-tisket...