/**
 * Created by mincheung on 17/06/2017.
 */
function repeatStringNumTimes(str, num) {

    if ( num  > 0 ) {
        var t =  str.repeat(num);

    } else {
        t =  ""
    }

    // repeat after me
    return t;
}
console.log(repeatStringNumTimes("abc", 3));  // abcabcabc
console.log(repeatStringNumTimes("abc", -3));  //Empty string