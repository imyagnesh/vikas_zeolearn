var x = 1;

let 

{
    x = 2;
    console.log(x);
}

let x = 1;

{
    let x = 2;
    console.log(x);
}

console.log(x)

const x = 1;
{
    const x = 2;
    console.log(x);
}


const x =  { a: 1, b: 2};

const x = { a: 2, b: 2}

x.a = 2;

console.log(x);

const a = 1;
const b = 2;

const c = `${a}
${b}`;

console.log(c);


const b = 'hello'
const a = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    ${b}
</body>
</html>`

const fistName = 'vikas';
const lastname = 'baueja';

const greet = `Hello, ${fistName} ${lastname}`;

console.log(greet)


console.log(a);


const x = 10;

const y = 11;


const a = {
    x,
    y,
    z() {
        hello 
    }
}

console.log(a);

class Animal {
    constructor(type = 'animal') {
        this.type = type;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val.toUpperCase();
    }

    _makeSound() {
        console.log('making sound');
        return 'hello'
    }
};

let a = new Animal();
console.log(a.type);

console.log(a._makeSound());

class Cat extends Animal {
    constructor() {
        super('cat')
    }

    makeSound() {
        super._makeSound()
    }
}

let b = new Cat();

class Animal {
    constructor(type = 'animal') {
        this.type = type;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val.toUpperCase();
    }

    makeSound() {
        // var self = this;
        setTimeout(() => {
            console.log(this._type)
        }, 0)
    }
};

const a = new Animal();
console.log(a.makeSound());




const a = ['rohit','virat','shikhar', 'sachin'];

const b = a.map(item => {
    if(item !== 'sachin') {
        return item
    }
})

console.log(a);

console.log(b);

const a  = [1,2,3,4];

const b = a.filter(item => item > 2);

const c = a.find(item => item > 2);

console.log(a);
console.log(b);
console.log(c);

const a = [1,2,3,4];

// let sum = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     sum += element;
// }

// console.log(sum);


const sum1 = a.reduce((previous, current) => {
    console.log(previous);
    console.log(current);
    return previous + current;
}, 0);

console.log(sum1);


const a = undefined;
const b = 2;

const c = a && b;
const c = a || b;

console.log(c);


// const a = undefined;
// const b = 2;

// const c = a && b;

// console.log(c);

const a = [
    {
        name: 'virat',
        sex: 'male'
    },
    {
        name: 'rohit',
        sex: 'male'
    },
    {
        name: 'shikhar',
        sex: 'male'
    },
    {
        name: 'dipeeka',
        sex: 'female'
    },
    {
        name: 'kajol',
        sex: 'female'
    }
]

// {
//     male: [{
//         name: 'virat',
//         sex: 'male'
//     },
//     {
//         name: 'rohit',
//         sex: 'male'
//     },
//     {
//         name: 'shikhar',
//         sex: 'male'
//     }],
//     female: [{
//         name: 'dipeeka',
//         sex: 'female'
//     },
//     {
//         name: 'kajol',
//         sex: 'female'
//     }]
// }


// {
//     male: [{
//         name: 'virat',
//         sex: 'male'
//     }]
//     f
// }

const groupBy = a.reduce((previous, current) => {
    previous[current.sex] = previous[current.sex] || []
    previous[current.sex].push(current);
    return previous
}, {});
console.log(groupBy);

const groupBy = (arr, gbProperty) => {
    return arr.reduce((previous, current) => {
        previous[current[gbProperty]] = previous[current[gbProperty]] || []
        previous[current[gbProperty]].push(current);
        return previous
    }, {});
}

console.log(groupBy(a, 'sex')) 

