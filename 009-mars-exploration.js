//https://www.hackerrank.com/challenges/mars-exploration/problem
let s = 'SOSSPSSQSSOSSOR';

function marsExploration(s) {
  let sos = "SOS";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) != sos.charAt(i % 3))
      count++;
  }
  return count;
}
console.log(marsExploration(s)); 
