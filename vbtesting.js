
//E1
//create object
//understand hoisting
const a={x:5, y:10};

console.log(a);
console.log(a.x);
a.x=6;
{
    let a=20;
    console.log(a);
}
var b=a;
b.x=7;
console.log(b);
console.log(a);

//E2
const c=`${a.x} ${a.y}`;
console.log(c);

//E3
const firstName = 'vikas';
const lastname = 'baWeja';

const greet = `Hello, ${firstName} ${lastname}`;

console.log(greet);

const names=['rohit', 'yuvraj','virat','sachin']

const names2= names.map(item=> `Hello, ${item}` )

console.log(names2);