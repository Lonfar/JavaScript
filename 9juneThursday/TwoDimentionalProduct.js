// Write a function twoDimensionalProduct(array) 
// that takes in a 2D array of numbers as an argument. 
// The function should return the total product of 
// all numbers multiplied together.

// 1. interate each number
// 2. mutiply all the number together
// 3. return 

let twoDimensionalProduct = function(array) {
    let total = 1;
    for (i = 0; i < array.length; i++){
        let subArr = array[i];
        for (j = 0; j < subArr.length; j++){
            let num = subArr[j];
            total = num * total;

        }
    }
    return total;
}



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88