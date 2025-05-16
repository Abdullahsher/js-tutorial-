//Destructuring objects
const { name, ...details } = { name: 'Ali', age: 25, city: 'Lahore' };
console.log(name);    // 'Ali'
console.log(details); // { age: 25, city: 'Lahore' }
