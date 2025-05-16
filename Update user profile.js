const userProfile = {
    name : "Abdullah", 
    email: "abc@gmail.com"
}; 
const updateProfile = {
    ...userProfile , 
    email : "newmail@gmail.com" , 
    Ph: "032298939247"
};

console.log(updateProfile);
