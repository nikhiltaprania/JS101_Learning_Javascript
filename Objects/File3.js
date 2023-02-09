// Print the users whose age is more than 30

let person = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];

let a = new Array();
for (let i = 0; i < age.length; ++i) {
    let details = {};
    details.Name = person[i];
    details.Age = age[i];
    a.push(details);
}

for (let i = 0; i < a.length; ++i) {
    if (a[i].Age > 30) {
        console.log(a[i].Name);
    }
}