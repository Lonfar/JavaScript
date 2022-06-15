// Write a function abbreviateWords(sentence) that 
// takes in a sentence string. The function 
// should return a new sentence where words 
// that are longer than 4 characters have their 
// vowels removed. Hint: Consider creating a helper 
// function to remove all vowels in a string.
let abbreviateWords = function (string) {
    let arr = string.split(" ");
    let vowel = "aeiou";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            for (let j = 0; j < arr[i].length; j++) {
                if (vowel.includes(arr[i][j])) {
                    arr[i] = arr[i].replace(arr[i][j], "");
                }
            }
        }
    }
    return arr.join(" ");
}
// console.log(vowelRemover('what a wonderful place to live'));
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg