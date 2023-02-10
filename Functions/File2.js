// Function to print the Primes from 2 to a given limit

function isPrime(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let i = 2, limit = 100;
while (i <= limit) {
    if (isPrime(i)) {
        console.log(i);
    }
    ++i;
}