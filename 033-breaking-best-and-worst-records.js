//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/
const scores2 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  let [ hi, lo ] = [ scores[0], scores[0] ];
  let [ max, min ] = [ 0, 0 ];
  
  for (let i = 1; i < scores.length; i++) {
	  if (scores[i] > hi) { hi = scores[i]; max++; }
	  if (scores[i] < lo) { lo = scores[i]; min++; }
  }
  return [ max, min ];
}
console.log(breakingRecords(scores))
