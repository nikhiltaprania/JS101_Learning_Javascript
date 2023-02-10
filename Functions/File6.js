// Function named addNumbers which takes numbers as input and return their sum

function addNumbers(...nums) {
    let sum = 0;
    for (const i of nums) {
        sum += i;
    }
    return sum;
}

console.log(addNumbers(3, 4, 10));