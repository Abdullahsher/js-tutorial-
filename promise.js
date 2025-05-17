let promise = new Promise(function(resolve, reject) {
  let success = true;

  if (success) {
    resolve(" Task completed successfully!");
  } else {
    reject(" Task failed.");
  }
});

promise
  .then(function(result) {
    console.log("Then:", result);
  })
  .catch(function(error) {
    console.log("Catch:", error);
  })
  .finally(()=>console.log("This will run every time. "))
