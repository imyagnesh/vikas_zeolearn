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


//  Day 2 -------------------- //

const x = { a: 1, b: 2};
const y = { c: 3 };

// const z = Object.assign({}, x, y);
// console.log(z);

const z = { ...x, ...y};

console.log(z);

const y = {...x};

y.a = 2;

console.log(x);
console.log(y);


// update value

const x = { a: 1, b: 2, c: 3};

const y = {...x, b:4};

console.log(x);
console.log(y);


const x = { a: 1, b: 2, c: 3};


// const 

const { b, c } = x;

console.log(b);
console.log(c);


const user = { fistName: 'yagnesh', lastname: 'modh', id: 0 };

const { id, ...newUser } = user;

console.log(newUser);

const a = [1,2,3,4,5];

const b = [6,...a];

const c = [...a.slice(0,2), 6, ...a.slice(2)]

console.log(c)

console.log(b);

const a = [{ id: 1, text: 'buy milk', isCompleted: false}, { id: 2, text: 'buy food', isCompleted: false}]

const index = a.findIndex(x => x.id === 1);

console.log(index)

// const b = [...a, {...a[0], isCompleted: true}];

const b = [...a.slice(0, index),{...a[0], isCompleted: true}, ...a.slice(index + 1) ]

console.log(b);

const z = a.map(x => {
    if(x.id === index) {
        return {...x, isCompleted: true }
    }
    return x;
});

console.log(z)

const x = [1,2,3,4,5];

const [a,b,c,...rest] = x;

console.log(rest);

console.log(a);
console.log(b);
console.log(c);


const a = { a:1, b: 2, c: 3};

const { a:y } = a;

console.log(y)

const a = { a:1 , b: 2, c: 3};

for (const key in a) {
    console.log(key);
    console.log(a[key]);
}


const a = {  a: 1, b: 2, c: 3};

for (const [key, value] of Object.entries(a)) {
    console.log(key);
    console.log(value);
}


const x = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2);
        }, 2000)
        
      
    });
}

const y = async () => {
    try {
        const y = await x();
        console.log(y)
    } catch (error) {
        console.log(error);
    }
}

const x = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2);
        }, 2000)
        
      
    });
}

x().then(data => console.log(data)).catch(err => console.log(err))


const x = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 3000);
  });
  
  
  
  const y = new Promise((resolve, reject) => {
      setTimeout(() => {
          reject();
      }, 2000);
    });
  
    const z = Promise.all([x, y]).then(data => console.log(data)).catch(err => console.log(err))

    const a = [{id:1},{id:2},{id:1},{id:2}]

const b = [...new Set(a.map(x => x.id))];

console.log(b);

const myMap = new Map();

myMap.set('abc', 'pqr');
myMap.set('abc1', 'pqr1');
myMap.set('abc2', 'pqr1');

console.log(myMap.get('abc1'));
console.log(myMap.size);
  
  
  
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const divide = (a, b) => a/b;
const multiply = (a, b) => a * b

const calc = (a, b) => { 
    return (func) => {
       return func(a,b)
    }
};

console.log(calc(1,2)(multiply))
  
  
  
  
  







