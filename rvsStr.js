function reverseString(string) {
    let arr = [];
    let newStr = '';
    
    for (let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }
    for (let j = 0; j < string.length; j++) {
        newStr += arr.pop();
    }
    return newStr;
}

module.exports = reverseString;
//console.log(reverseString('English'));