// Function isOdd which returns a boolean value based on the number is odd or not and also print 0 to a given limit.

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

let i = 0, limit = 100;
while (i <= limit) {
    if (isOdd(i)) {
        console.log(i);
    }
    ++i;
}