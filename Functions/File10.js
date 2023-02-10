// Function to convert a character to lower case

function toLower(char) {
    let lo = "abcdefghijklmnopqrstuvwxyz";
    let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < lo.length; ++i) {
        if (char === up[i]) {
            return lo[i];
        }
    }
    return char;
}

let a = ["MA", "SA", "I", "SCH", "OOL"];
let i, j, temp, str, b = [];

for (i = 0; i < a.length; ++i) {
    temp = a[i];
    str = "";
    for (j = 0; j < temp.length; ++j) {
        str += toLower(temp[j]);
    }
    b.push(str);
}

console.log(b);