// Object value extraction average 
const marks = {a: 85, b:92, c:78};
//  const avg =  marks.reduce((acc, avg), ) 
let arr = (Object.values(marks));
const sum = arr.reduce((acc , val) => acc+ val , 0 );
console.log(sum/arr.length);