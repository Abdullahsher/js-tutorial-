//Rest operator ...
function sum(...nums){
    return nums.reduce((acc, num )=> acc + num , 0)
}
console.log(sum (10,21,13,14,5))