// Array slice method

function sliceMethod(a, start, end) {
    let dummy = [];
    let i = start;
    if (end === undefined) {
        while (i < a.length) {
            dummy.push(a[i++]);
        }
    } else {
        while (i < end) {
            dummy.push(a[i++]);
        }
    }
    return dummy;
}

let arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(sliceMethod(arr, 0, 2));