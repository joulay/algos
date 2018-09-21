// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const checker = 'aeiou'; //or ['a', 'e', 'i', 'o', 'u']

    for (let x of str.toLowerCase()) {
        if (checker.includes(x)) {
            count ++;
        }
    }
    return count;
}
// console.log(vowels('why do you ask?'));

module.exports = vowels;

function vowels(str) {
    const matches = str.match(/[aeiou]/gi); 
    //g = dont stop at first match we find inside string
    //i insensitive, case insensitive
    return matches ? matches.length : 0;
}