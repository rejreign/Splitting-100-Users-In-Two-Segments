//Since the emphasis is to split 100 employees into two, we will combine one statement
//This is because in 1 -100 IDs, there are even, odd and prime numbers

let EvenOdd = [ ];
let Other  = [ ];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        EvenOdd.push(i);
     } else {
        Other.push(i);
    }
}

console.log("Total Number of EvenOdd Employees = "  + EvenOdd.length);
console.log("Total Number of Others = "    + Other.length);
