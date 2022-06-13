// Write a function longestWord(sentence) that 
// takes in a sentence string as an argument. 
// The function should return the 
// longest word in the sentence.
let longestWord = function(sentence) {
    let arr = sentence.split(" ");
    let longest = "";
    
    for (i = 0 ; i < arr.length; i++) {
        let word = arr[i];
        if (word.length > longest.length) {
            longest = word;
        }
    } 
    return longest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // 