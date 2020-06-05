//https://www.hackerrank.com/challenges/counting-valleys/forum
function countingValleys(n, s) {
    let seaLevel = 0;
    let currLevel = 0;
    let valleys = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }
    }
    return valleys;
}
console.log(countingValleys(8, 'UDDDUDUUU')) //1
console.log(countingValleys(12, 'DDUUDDUDUUUD')) //2


/*    
//this will work OLOLOL
function countingValleys(n, s) {
  if (n=8){
    return 1
  } else return 2
}

 */