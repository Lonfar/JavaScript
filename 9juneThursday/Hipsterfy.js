// Write a function hipsterfy(sentence) that 
// takes in a sentence string and returns 
// the sentence where every word 
// is missing its last vowel.
// 1. declare a new string 2. split str to arr
// 3. interate each word 4. interate backward letter
// 5. if letter include vowel 6.slice vowl 7,pushnw

let hipsterfy = function (sentence) {
    let newStr = [];
    let vowel = "aeiou";
    let arr = sentence.split(" ");
    for (i = 0; i < arr.length; i++) {
        for (j = arr[i].length - 1; j >= 0; j--) {
            if (vowel.includes(arr[i][j])) {
                arr[i] = arr[i].slice(0, j) + arr[i].slice(j + 1);
                break;
            }
        }
    }
    return arr.join(" ");
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'