//https://www.hackerrank.com/challenges/plus-minus/problem
//let arr = [1,1,0, -1, -1];
let arr = [-4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {
  let positive = null;
  let negative = null;
  let zero = null; 
  let arrIndex = null;

  for (let i = 0; i < arr.length +1; i++){
    if (arr[i] > 0) { 
      positive ++; 
    }else if (arr[i] < 0) {
      negative ++;
    } else if (arr[i] === 0) {
      zero ++;
  }
  arrIndex = i;
}
  console.log((positive/i).toFixed(6));
  console.log((negative/arrIndex).toFixed(6));
  console.log((zero/arrIndex).toFixed(6));
}
plusMinus(arr);

