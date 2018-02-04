// let 

let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 1

// เปรียบเทียบ let กับ var

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

console.log(varTest());

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

console.log(letTest());

// const

const number = 42;

try {
    number = 99;
} catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
