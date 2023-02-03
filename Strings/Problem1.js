let num = 123;
let remain = 0, rev = 0;
while(num !== 0) {
  remain = num % 10;
  rev = rev*10 + remain;
  num /= 10;
}
console.log(rev);