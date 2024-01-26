// start learning js promises in details (resolve,reject,then,catch)
/// start ///
const hasLearning = false;
const learnPromise = new Promise((resolve, reject) => {
  if (!hasLearning) {
    const learningDetails = {
      name: "Technical Meeting",
      location: "Skype",
      time: "8:pm",
    };
    resolve(learningDetails);
  } else {
    reject(new Error("Learing already scheduled"));
  }
});

learnPromise
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((error) => {
    console.log(error.message);
  });

/// end ///
