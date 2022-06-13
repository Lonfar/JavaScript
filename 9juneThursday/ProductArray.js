// Write a function product(nums) that 
// takes in an array of numbers. 
// The function should return the total product 
// of multiplying all numbers of the array together. 
// You can assume that nums will not be an empty array.

let product = function(nums) {
    let result = 1;

    for (i = 0; i < nums.length; i++) {
        let num = nums[i]; 
        result *= num;

    }
    return result;
}
console.log(product([10, 3, 5, 2])); // 300
console.log(product([4, 3])); // 12