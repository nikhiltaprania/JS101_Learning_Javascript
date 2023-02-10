// Function to calculate average of an array

function average(a) {
    let l = a.length;
    if (l === 0) {
        return 0;
    }
    let i, sum = 0;
    for (i = 0; i < l; ++i) {
        sum += a[i];
    }
    return (sum / l);
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(average(arr));