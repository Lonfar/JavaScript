// Write a function maxValue(nums) that takes in an array of numbers as an arg. 
// The function should return the largest number of the array. 
// If the array is empty, the function should return null.

/* 1.interate each number. 2.compare two numbers 3. splice the number is smaller 4. return the last number*/
let maxValue = function (nums) {
    let max = null;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}



console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3 -7, 3])); // 3
console.log(maxValue([])); // null