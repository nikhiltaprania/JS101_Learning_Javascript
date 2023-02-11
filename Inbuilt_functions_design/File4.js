// String's substring method

function sub_string(str, start, end) {
    let temp = "";
    let i = start;
    if (end === undefined) {
        while (i < str.length) {
            temp += str[i++];
        }
    } else {
        while (i < end) {
            temp += str[i++];
        }
    }
    return temp;
}

let sample = "NikhilKumar";
console.log(sub_string(sample, 0, 6));