/// start  ///
/// learn console.table()
const BMW = { model: "BMW", price: "450000" };
const Toyota = { model: "Toyota", price: "350000" };
const Bugatti = { model: "Bugatti", price: "650000" };

// console.log(BMW, Toyota, Bugatti);
// we can pass an object as an array
// console.table([BMW, Toyota, Bugatti]);
// specific property(key,value) keep its column
console.table([BMW, Toyota, Bugatti], ["model"]);
/// end  ///

/// start  ///
/// learn console.assert()
// var firstNum = 6;
// var secondtNum = 7;
// // chech two number match or not
// if (firstNum == secondtNum) {
//   console.log("Number match");
// } else {
//   console.log("Number do not match");
// }
// // debug way check two number match or not
// console.assert(firstNum == secondtNum, "do not match the number");
/// end  ///

/// start  ///
/// learn console.time()
/// How long a code block takes to execute
// console.time("for loop");
// for (let i = 1; i <= 100; i++) {
//   // console.log(i);
// }
// console.timeLog("for loop");
// console.timeEnd("for loop");
/// end  ///

/// start  ///
/// learn console.count()
// function totalFun(a, b) {
//   console.count("add two number");
//   return a + b;
// }
// totalFun(3.5);
// totalFun(5.5);
// totalFun(5.5);

// console.count();
// console.count();
// console.count();

/// end  ///
