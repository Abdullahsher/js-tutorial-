function orderFood(food) {
  return new Promise((resolve, reject) => {
    console.log(` You have ordered the food ${food}...`);

    setTimeout(() => {
      let isAvailable = Math.random() > 0.5;

      if (isAvailable) {
        resolve(`${food} is delivered!`);
      } else {
        reject(`Sorry, ${food} is not available.`);
      }
    }, 2000);
  });
}

async function placeOrder() {
  try {
    const result = await orderFood("Pharata");
    console.log("Your's", result);
  } catch (error) {
    console.log("There is an error", error);
  } finally {
    console.log("Your order is processed.");
  }
}

placeOrder();
