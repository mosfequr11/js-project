////  using Promise as like async function
function myAsyncPromise() {
  return Promise.resolve(`hellow world promise`);
}
console.log(myAsyncPromise());
/// end ///

//// async function
async function myAsync() {
  // return "hellow world async";
  return `hellow world async`;
}
console.log(myAsync());
/// end ///

//// sync function

function mySync() {
  return "hellow world sync";
}
console.log(mySync());
/// end ///
