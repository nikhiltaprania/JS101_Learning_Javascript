// Function to swap the string case;

function convertAlpha(str) {
    let lo = "abcdefghijklmnopqrstuvwxyz";
    let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i, j, temp = "";

    for (i = 0; i < str.length; ++i) {
        for (j = 0; j < lo.length; ++j) {
            if (str[i] === lo[j]) {
                temp += up[j];
            }
            if (str[i] === up[j]) {
                temp += lo[j];
            }
        }
    }
    return temp;
}

let sample = "Test";
console.log(convertAlpha(sample));