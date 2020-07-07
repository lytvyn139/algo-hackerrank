//https://www.hackerrank.com/challenges/repeated-string/
const s = 'aba';
const n = 10;
function repeatedString(s, n) {
    const countA = s => s.split('a').length - 1;

    let len = s.length;
    let reps = Math.floor(n / len);
    let remainder = s.slice(0, n % len);

    return reps * countA(s) + countA(remainder);
};
z = repeatedString(s, n);
console.log(z)