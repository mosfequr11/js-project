//find the duplicate number from an array
// const number = [1, 2, 5, 7, 7, 2, 9, 5, 4, 3];
// const duplicate = number.filter(function (po, index, array) {
//   return array.indexOf(po) !== index;
// });
// console.log(duplicate);

//count vowel in a sentense
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowel(sentense) {
  let count = 0;
  const letters = Array.from(sentense);
  letters.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
}
console.log(countVowel("Aeiou Aeiou Ae"));
