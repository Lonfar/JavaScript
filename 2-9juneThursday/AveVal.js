// Write a function avgVal(arr) that accepts an array as an arg. 
// The function should return the average of all values in the array. 
//  the array is empty, it should return null.

let avgVal = function(arr) {
    if(arr.length === 0) {
        return null;
    }
    let sum = 0;
    let average = null;
    for (i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num; 
    }
    return average = sum / arr.length;
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null