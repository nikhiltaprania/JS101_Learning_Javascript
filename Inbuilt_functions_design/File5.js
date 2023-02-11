// Array includes method

function includes_fun(a, item) {
    let i = 0, l = a.length;
    while (i < l) {
        if (a[i] === item) {
            return true;
        }
        ++i;
    }
    return false;
}

let arr = [1, 3, 5, 7, 9];
console.log(includes_fun(arr, 5));