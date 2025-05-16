//Add items to cart using spread operator 
const currentCart = ['Shoes', 'T-shirt'];
const newItems = ['Jeans', 'Cap'];

const updatedCart = [...currentCart, ...newItems];

console.log(updatedCart);

