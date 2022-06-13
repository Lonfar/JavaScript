// Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
// The function should return a new string, containing only the words that don't have the letter "e" in them.

/* 1. split string into arr 2 run each word in arr 3 check no e => 4 push up to a new arry 5 convert arr to string*/

let removeEWords = function (sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (!arr[i].includes("e")) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
}



console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'