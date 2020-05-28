//https://www.hackerrank.com/challenges/between-two-sets/problem
function getTotalX(a, b) {
  let startRange = a[a.length - 1];
  let endRange = b[0];
  let count = 0;
  for (let i = startRange; i <= endRange; i += startRange) {
    const isMultiple = a.reduce((acc, item) => acc ? (i % item === 0) : false, true);
    const isFactor = isMultiple && b.reduce((acc, item) => acc ? (item % i === 0) : false, true);
    if (isFactor) {
      console.log(i);
      count++;
    }
  }
  console.log(count)
  return count;
}

getTotalX(3, 2)
