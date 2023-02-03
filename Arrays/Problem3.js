// Average of all even numbers

let arr = [39, 22, 21, 0, 78, 12, 20, 19];
let i = 0, count = 0, evenSum = 0;
while(i <= arr.length) {
  if(arr[i]%2===0) {
    evenSum += arr[i];
    count++;
  }
  ++i;
}
console.log(evenSum/count);

// Output = 26.4