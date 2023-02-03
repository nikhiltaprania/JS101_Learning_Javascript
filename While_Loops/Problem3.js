// Printing sum of multiples of 3 till 20

let i = 1, limit = 20, sum = 0;
while(i <= 20) {
  if(i % 3 === 0) {
    sum += i;
  }
  ++i;
}
console.log(sum);

// Output = 63