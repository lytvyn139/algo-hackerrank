//https://www.hackerrank.com/challenges/circular-array-rotation
const a = [3,4,5];
const k = 2;             //number of rotations
const queries = [1,2]   // return index
function circularArrayRotation(arr, k, queries) {
    for (let i = 1; i <= k; i++) {
        a.unshift(a.pop());
    }
    return queries.map(value => {
        return a[value];
    });
}
console.log( circularArrayRotation(a, k, queries) )
