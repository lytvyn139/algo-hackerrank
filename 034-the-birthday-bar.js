//https://www.hackerrank.com/challenges/the-birthday-bar
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

// 3% faster
function birthday(s, d, m) {
    let counter = 0;
    for (let i = 0; i < s.length; i++){
        let sum = 0;
        for (let j = 0; j < m; j++){
            sum = sum + s[i + j];
        }
        if (sum === d) {
            counter++;
        }
    }
    return counter;
}

console.log(birthday(s, d, m));


// const s = [1, 2, 1, 3, 2];
// const d = 3;
// const m = 2;

// function birthday(s, d, m) {
//     let result = 0;
    
//     for (let i = 0, l = s.length; i < l; i++) {
//         if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
//             result++;
//         }
//     }
    
//     return result;
// }
// console.log(birthday(s, d, m));