//Printing Prime to a give limit

let i, limit = 200, bag = "";
for(i = 2; i <= limit; ++i) {
  if(isPrime(i)) {
    bag += (i + ", ");
  }
}
console.log(bag);

//Function to check prime
function isPrime(num) {
  for(let i = 2; i < num; ++i) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}