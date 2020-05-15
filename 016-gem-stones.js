// https://www.hackerrank.com/challenges/gem-stones/problem
let arr = ["abcdde", "baccd", "eeabg"];
function gemstones(arr) {
  let counter = null;
  //acii a = 97; z = 122;
  for (let i = 97; i <= 122; i++) {
    if (arr.every(element => element.includes(String.fromCharCode(i)))) {
      //fromCharCode method returns a string created from the specified sequence of UTF-16 code units.
      counter++;
    }
  }
  return counter;
}

let z = gemstones(arr);
console.log(z);

// let arr = ["abcdde", "baccd", "eeabg"];
// function gemstones(arr) {
//   let count = 0;
//   let hasGem = true;

//   for (let i = 0; i < arr[0].length; i++) {
//     let char = arr[0].charAt(i);
//     if (arr[0].indexOf(char) === i) {
//       for (let j = 1; j < arr.length; j++) {
//         if (arr[j].indexOf(char) === -1) {
//           hasGem = false;
//         }
//       }
//       if (hasGem) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let z = gemstones(arr);
// console.log(z);

