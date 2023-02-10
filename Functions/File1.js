// Function to check if a number is Prime or Not

function isPrime(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let a = 47;
if (isPrime(a)) {
    console.log(a + " is a prime number");
} else {
    console.log(a + " isn't a prime number");
}