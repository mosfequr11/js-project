// using callback to handle javascript synchronous controle
// callback hell arise
/// start ///
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};
const processOrder = (customer) => {
  console.log(`order processing for ${customer}`);
  setTimeout(() => {
    console.log(`cooking completed`);
    console.log(`order processing for ${customer} is successful`);
    callback(customer);
  }, 1000);
};

const completeOrder = (customer) => {
  console.log(`order complete for ${customer}`);
  callback(customer);
};

takeOrder("mosfequr", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

/// end ///

// how to handle javascript synchronous blocking behavior
/// start ///
// const takeOrder = (customer) => {
//   console.log(`take order for ${customer}`);
// };
// const processOrder = (customer) => {
//   console.log(`order processing for ${customer}`);
//   setTimeout(() => {
//     console.log(`cooking completed`);
//     console.log(`order processing for ${customer} is successful`);
//   }, 1000);
// };

// const completeOrder = (customer) => {
//   console.log(`order complete for ${customer}`);
// };
// takeOrder("mosfequr");

/// end ///

// check javascript synchronous blocking behavior
/// start ///
// const processOrder = (customer) => {
//   console.log("processing order for customer 1");
//   var curentTime = new Date().getTime();
//   while (curentTime + 1000 >= new Date().getTime())
//     console.log(" order processing for customer is successful");
// };

// console.log("take order  from customer 1");
// // processOrder();
// console.log("completed order  for customer 1");

/// end ///
