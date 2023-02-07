// The number of times each character appears

let str = "Nikhil and Akshay are the best friends";
let obj = {};
let x;

for(let i = 0; i < str.length; ++i) {
  x = str[i];
  if(x !== " ") {
    if(obj[x] === undefined) {
      obj[x] = 1;
    }else {
      obj[x]++;
    }
  }
}

for(let j in obj) {
  console.log(`${j} appears ${obj[j]} times`);
}