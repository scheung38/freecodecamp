/**
 * Created by mincheung on 18/06/2017.
 */

// https://stackoverflow.com/questions/10927722/compare-2-arrays-which-returns-difference
function diffArray(arr1, arr2) {
    var newArr = [];
    // var i = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;

}
console.log(diffArray([1, 5, 3], [2, 5, 1]));  // [3, 2]
console.log(diffArray([1, 2, 5], [5,1]));  // [2]
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // [4]
// console.log(diffArray([1, 3, 5], [1, 3, 5, 7]));  // [7]
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));  // ["piglet", 4]

testarr1 = [10,20];
testarr2 = [20];
console.log(testarr1.indexOf(2));  // give me position associated with argument supplied 2 -> returns -1 -> Not Found
console.log(testarr1.indexOf(20)); // give me position associated with argument supplied 20 -> found in position index 1
console.log(testarr1.indexOf(10)); // give me position associated with argument supplied 10 -> found in position index 0



