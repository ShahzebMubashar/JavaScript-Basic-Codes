function reverseString(str) {
    let reversedStr = '';


    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}


console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("!dlrow ,olleH")); // "Hello, world!"
