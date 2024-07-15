function factorialRecursive(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // 120
console.log(factorialRecursive(0)); // 1
console.log(factorialRecursive(7)); // 5040
