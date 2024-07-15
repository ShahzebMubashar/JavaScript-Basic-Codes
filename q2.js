const strings = ["apple", "banana", "strawberry", "peach", "grape", "yellow"];

let longestString = strings[0];

for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
        longestString = strings[i];
    }
}

console.log(longestString);
