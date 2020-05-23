//https://www.hackerrank.com/challenges/migratory-birds/forum
let arr = [1, 4, 4, 4, 5, 3];
function migratoryBirds(arr) {
   let frequency = new Array(6).fill(0);
   for (let i = 0;i<arr.length;i++) {
        frequency[arr[i]] += 1;
    }
   return frequency.indexOf(frequency.reduce((a,b)=>Math.max(a,b)));
}
migratoryBirds(arr);




// let arr = [1, 4, 4, 4, 5, 3];
// function migratoryBirds(arr) {
//    let frequency = new Array(6).fill(0);
//   arr.forEach(x => frequency[x]++);
//    return frequency.indexOf(Math.max(...frequency));
// }
// migratoryBirds(arr);


// let arr = [1, 4, 4, 4, 5, 3];
// function migratoryBirds(arr) {
//     arr.sort(function (a, b) { 
//       return a - b;
//     });
//     const numMap = {};
//     var maxNum = 0;
//     var maxChar = 0;
//     for (let num of arr) { 
//         if (numMap[num]) {
//             numMap[num]++;
//         } else { 
//             numMap[num] = 1;
//         }
//     }
//     for (let num in numMap) { 
//         if (numMap[num] > maxNum) { 
//             maxNum = numMap[num];
//             maxChar = num;
//         }
//     }
//     return maxChar;
// }
// migratoryBirds(arr);
