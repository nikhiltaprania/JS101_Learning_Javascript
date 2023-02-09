// Print the highest scored student for each grade along with the total

let a = [
    {
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
];


for (let m = 0; m < a.length; ++m) {
    let len = a[m].students[0].marks.length;
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < len; ++i) {
        sum1 += a[m].students[0].marks[i];
    }
    for (let i = 0; i < len; ++i) {
        sum2 += a[m].students[1].marks[i];
    }

    if (sum1 > sum2) {
        console.log(a[m].grade + "-" + a[m].students[0].name + "-" + sum1);
    } else {
        console.log(a[m].grade + "-" + a[m].students[1].name + "-" + sum2);
    }
}