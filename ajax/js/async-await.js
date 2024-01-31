/// start ///
const hasLearning = false;
// const hasLearning = true;
const learnPromise = new Promise((resolve, reject) => {
  if (!hasLearning) {
    const learningDetails = {
      name: "Technical Learing",
      location: "Skype",
      time: "8:pm",
    };
    resolve(learningDetails);
  } else {
    reject(new Error("Learing already scheduled"));
  }
});
///  using Promise as like async function
// learnPromise
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
///  using async-await as like  Promise
async function myLearningDetails() {
  const varLearningDetails = await learnPromise;
  console.log(varLearningDetails);
}
myLearningDetails();

/// end ///

/// start ///
///  using Promise as like async function
// function myAsyncPromise() {
//   return Promise.resolve(`hellow world promise`);
// }
// console.log(myAsyncPromise());
/// end ///

/// start ///
/// async function
// async function myAsync() {
//   // return "hellow world async";
//   return `hellow world async`;
// }
// console.log(myAsync());
/// end ///

//// sync function

// function mySync() {
//   return "hellow world sync";
// }
// console.log(mySync());
/// end ///
