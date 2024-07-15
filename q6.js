function findIndexOfElement(arr, element) {
    return arr.indexOf(element);
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(findIndexOfElement(numbers, 9)); // 2
console.log(findIndexOfElement(numbers, 5)); // 0 (first occurrence)
console.log(findIndexOfElement(numbers, 7)); // -1 (element not found)
