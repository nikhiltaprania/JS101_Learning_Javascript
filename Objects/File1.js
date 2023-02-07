// Find unique elements in the array

let a = [1, 2, 2, 4, 2, 3, 5, 3];
let obj = {};

for(let i = 0; i < a.length; ++i) {
  if(obj[a[i]] === undefined) {
    obj[a[i]] = 1;
  }else {
    obj[a[i]]++;
  }
}

for(let j in obj) {
  if(obj[j] === 1) {
    process.stdout.write(j+" ");
  }
}