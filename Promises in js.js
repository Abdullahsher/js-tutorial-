// Promises 
console.log ("Hello");
let promise = new Promise (function(resolve , reject){
    alert("I am in new Promise")
    resolve(56)
})

setTimeout(function(){
    console.log("Hello in 2 seconds") // Run asyncronously 
}, 2000
)
console.log("My  name is " + "Abdullah")