//find the duplicate number from an array
const number = [1, 2, 5, 7, 7, 2, 9, 5, 4, 3];
const duplicate = number.filter(function (po, index, array) {
  return array.indexOf(po) !== index;
});
console.log(duplicate);
