function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
}


console.log(isEvenOrOdd(4)); // "4 is even"
console.log(isEvenOrOdd(7)); // "7 is odd"
console.log(isEvenOrOdd(-1)); // "-1 is odd"
