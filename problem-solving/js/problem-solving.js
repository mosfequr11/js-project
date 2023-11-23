//find the duplicate number from an array
// const number = [1, 2, 5, 7, 7, 2, 9, 5, 4, 3];
// const duplicate = number.filter(function (po, index, array) {
//   return array.indexOf(po) !== index;
// });
// console.log(duplicate);

//count vowel in a sentense
// const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function countVowel(sentense) {
//   let count = 0;
//   const letters = Array.from(sentense);
//   letters.forEach(function (value) {
//     if (vowel.includes(value)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countVowel("Aeiou Aeiou Ae"));

// check leap year
// function leapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }
// leapYear(2028);
// leapYear(2026);

// Separate the sentence into letter
// const sentense = "Hellow World";
// console.log(sentense);
// const letters = Array.from(sentense);
// console.log(letters);

// Sort a number in descending
const roll_number = [7, 9, 6, 4, 8, 3, 2];
console.log(
  roll_number.sort(function (a, b) {
    // return a - b;
    return b - a;
  })
);
