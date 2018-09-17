// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let ch = {};
    let max = 0;
    let maxStr = '';
    for (let x of str) { //iterate through array or string
        if(ch[x]) {
            ch[x]++;
        } else {
            ch[x]=1;
        }
    }
    for (let x in ch) { //iterate through object
        if (ch[x] > max ) {
            max = ch[x]
            maxStr = x;
        }
    }
    return maxStr;
}

maxChar("123111")
module.exports = maxChar;
