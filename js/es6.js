// const vehicles = ["mustang", "f-150", "expedition"];
// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// console.log(car);
// console.log(truck);
// console.log(suv);
// console.log(vehicles);

// With destructuring:
const vehicles = ["mustang", "f-150", "expedition"];

const [car, suv, truck] = vehicles;
console.log(vehicles);
console.log(car);
console.log(truck);
console.log(suv);
