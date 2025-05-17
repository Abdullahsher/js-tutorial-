function orderFood(food) {
    return  new Promise((resolve, reject) => {
    console.log("You have ordered the food");

    setTimeout(() => {
      let isAvailable = Math.random() < 0.5;

      if (isAvailable) {
        resolve(` ${food} is delivered.`);
      } else {
        reject(`Sorry, ${food} is unavailable.`);
      }
    }, 2000);
  });

  
}


orderFood("Pharta")
  .then(result => console.log("Your's", result))
  .catch(error => console.log("There is an error ", error))
  .finally(() => console.log(" Your order is processed."));
