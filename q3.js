function isPalindrome(str) {
    const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    let left = 0;
    let right = newStr.length - 1;


    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
