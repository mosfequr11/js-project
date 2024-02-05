/// start  ///
/// learn console.time()
/// How long a code block takes to execute
console.time("for loop");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.timeLog("for loop");
console.timeEnd("for loop");
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
