//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
let i = 20;
let j = 23;
const k = 6;

function beautifulDays(i, j, k) {
    let count = 0;
    for (let x = i; x <= j; x++) {
        let rev = parseInt(x.toString().split('').reverse().join(''), 10);
        if ((x - rev) % k == 0) {
            count++;
        }
    }

    return count;
}
beautifulDays(20, 23, 6);
