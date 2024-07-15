function sortNumbersAscending(arr) {
    arr.sort((a, b) => a - b);

    return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(sortNumbersAscending(numbers)); // [1, 2, 5, 5, 6, 9]
