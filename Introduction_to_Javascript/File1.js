let B = ["mango", "mango", "cherry"];
let N = B.length;

let i, j;
let flag = true;

for(i = 0; i < N && flag; ++i) {
    for(j = 0; j < N; ++j) {
        if(B[i] !== B[j]) {
            flag = false;
            console.log("Mix Basket");
            break;
        }
    }
}

if(flag) {
    console.log("Single Type");
}