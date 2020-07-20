//https://www.hackerrank.com/challenges/countingsort4
let halfLen = Math.floor(arr.length / 2);
let res = new Array(arr.length);
let out = "";

for (let i = 0; i < res.length; i++) {
  res[i] = new Array();
}

for (let i = 0; i < halfLen; i++) {
  arr[i][1] = "-";
}

for (let i = 0; i < arr.length; i++) {
  res[arr[i][0]].push(arr[i][1]);
}

for (let i = 0; i < res.length; i++) {
  for (let j = 0; j < res[i].length; j++) {
    out += res[i][j] + " ";
  }
}
console.log(out);
