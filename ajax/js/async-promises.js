// multiple promise concurrently
/// start ///
const promiseConcurrently1 = Promise.resolve(`promise 1 resolved`);
const promiseConcurrently2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`promise 2 resolved`);
  }, 1000);
});

promiseConcurrently1.then((res) => console.log(res));
promiseConcurrently2.then((res) => console.log(res));

/// end ///

// start learning js promises in details (resolve,reject,then,catch)
/// start ///
// const hasLearning = false;
// const learnPromise = new Promise((resolve, reject) => {
//   if (!hasLearning) {
//     const learningDetails = {
//       name: "Technical Meeting",
//       location: "Skype",
//       time: "8:pm",
//     };
//     resolve(learningDetails);
//   } else {
//     reject(new Error("Learing already scheduled"));
//   }
// });

// learnPromise
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

/// end ///
