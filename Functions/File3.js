// Function to print Non-Primes from 2 to a given limit

function isPrime(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= 100; ++i) {
    if (isPrime(i) === false) {
        console.log(i);
    }
}