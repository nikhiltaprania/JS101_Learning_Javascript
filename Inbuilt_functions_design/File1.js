// Array join method

let arr = ["Nikhil", "is", "good", "boy"];
console.log(joinFun(arr, "-"));


function joinFun(array, ch) {
    let i, j, k, l = array.length;
    let str = "";

    for (i = 0; i < l; ++i) {
        k = array[i];

        for (j = 0; j < k.length; ++j) {
            if (k[j] !== " ") {
                str += k[j];
            }
        }

        if (i === l - 1) {
            break;
        }
        str += ch;
    }
    return str;
}