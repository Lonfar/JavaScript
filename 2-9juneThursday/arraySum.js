// Write a function sumArray(arr)
// that accepts an array as an arg.
// The function should return the total sum of all values in the array.

function sumArray(arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++){
        let number=arr[i];
        sum += number;
    } 
    return sum;
}



console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0