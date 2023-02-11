// Array lastIndexOf method

let arr = ["3", "5", "3", "1", "3", "5"];
console.log(last_index(arr, "3"));

function last_index(a, item) {
    let i = a.length - 1;
    while (i >= 0) {
        if (a[i] === item) {
            return i;
        }
        --i;
    }
    return -1;
}