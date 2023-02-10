// Function to check if the char is a small case or not.

function toCheckLowerCase(char) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < lower.length; ++i) {
        if (lower[i] === char) {
            return true;
        }
    }
    return false;
}

if (toCheckLowerCase("n")) {
    console.log("Lower Case");
} else {
    console.log("Upper Case or Invalid");
}