// Counting the overall total number of characters

let arr = ["Nikhil", "Kumar", "Akshay", "Kadam"];
let i, sum = 0;
for(i = 0; i < arr.length; ++i) {
  sum += arr[i].length;
}
console.log(sum);

// Output = 22