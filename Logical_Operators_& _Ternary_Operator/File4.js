// Which is greatest

let a = 22, b = 52, c = 19;
if(a>b && a>c) {
  console.log(`${a} is the greatest`);
}else if(b>a && b>c) {
  console.log(`${b} is the greatest`);
}else if(c>a && c>b) {
  console.log(`${c} is the greatest`);
}else if(a===b && a===c && b===c) {
  console.log("a = b = c");
}

// Output = 52 is the greatest