//Printing Pattern

let i, j, N = 20, bag;
for(i = 0; i < N; ++i) {
  bag = "";
  for(j = 0; j < N; ++j) {
    if(i === 0 || i === (N - 1)) {
      bag += "*";
    }else if (j === 0 || j === (N - 1)) {
      bag += "*";
    }else {
      bag += " ";
    }
  }
  console.log(bag);
}