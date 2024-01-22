// check javascript synchronous blocking behavior
const processOrder = (customer) => {
  console.log("processing order for customer 1");
  var curentTime = new Date().getTime();
  while (curentTime + 1000 >= new Date().getTime())
    console.log(" order processing for customer 1");
};

console.log("take order  from customer 1");
// processOrder();
console.log("completed order  for customer 1");
