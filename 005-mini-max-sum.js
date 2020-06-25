/* https://www.hackerrank.com/challenges/mini-max-sum */


function miniMaxSum(arr) {
const maxArr = [...arr].sort((a, b) => a - b);
const minArr = [...arr].sort((a, b) => b - a);
const max = maxArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
const min = minArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
console.log(min + ' ' + max);
}
let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); 