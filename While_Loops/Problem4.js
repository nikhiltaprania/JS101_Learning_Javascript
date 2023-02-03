// Print the average of even numbers from 1 to 100

let i = 1, count = 0, sum = 0;
while(i <= 100) {
  if(i % 2 === 0) {
    sum += i;
    ++count;
  }
  ++i;
}
console.log(sum/count);

// Output = 51