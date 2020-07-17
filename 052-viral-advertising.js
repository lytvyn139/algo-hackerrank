//https://www.hackerrank.com/challenges/strange-advertising
function viralAdvertising(n) {
  let totalLikes = 2;
  let shared = 5;
  for (let i = 1; i < n; i++) {
    shared = Math.floor(shared / 2) * 3;
    totalLikes += Math.floor(shared / 2);
  }
  return totalLikes;
}
console.log(viralAdvertising(34)); //3149621
