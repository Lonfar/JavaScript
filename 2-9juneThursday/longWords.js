// Write a function longWords(words) that takes in an array of words. 
// The function should return an array containing only the words that are
//  longer than 5 characters.

/* 1.go each word 2. check the length of character 3. if word length > 5  4. return a new arr that contain word > 5*/

let longWords = function(words) {
    let newArr = [];
    for (i=0; i<words.length; i++){
        let word = words[i];
        let length = words[i].length;
        if(length > 5){
            newArr.push(word);
        }
    }
return newArr;

}



console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]