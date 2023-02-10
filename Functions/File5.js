// Function to replace spaces in a given string with - .

function removeSpace(str) {
    let i, l = str.length, temp = "";
    for (i = 0; i < l; ++i) {
        if (str[i] === " " || str[i] === "  ") {
            temp += "-";
        } else {
            temp += str[i];
        }
    }
    console.log(temp);
}

let sentence = "Nikhil is a good boy."
removeSpace(sentence);