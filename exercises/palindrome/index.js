// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let checker = '';
    for (let l of str) {
        checker = l + checker;
    }
    return str === checker;


}



module.exports = palindrome;


// function palindrome(str) {
//     let checker = str.split("").reverse().join("");
//     if (str === checker) {
//         return true
//     }
//}