//https://www.hackerrank.com/challenges/the-love-letter-mystery
function theLoveLetterMystery(s) {
    let c = [];
    let result = 0;
    for(let i=0; i<Math.floor(s.length/2); i++) {
        result =(Math.abs(s.charCodeAt(i)-s.charCodeAt(s.length-i-1)))+result;
    }
    return result;
}
