// Changing a given lowercase character into uppercase character

let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lo = "abcdefghijklmnopqrstuvwxyz";
let ch = "n";
for(let i = 0; i < up.length; ++i) {
  if(lo[i] === ch) {
    console.log(up[i]);
    break;
  }
}

// Output = N