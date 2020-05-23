//https://www.hackerrank.com/challenges/making-anagrams/problem

let s1 = 'cde';
let s2 = 'abc';

function makingAnagrams(s1, s2) {
let count=0;
let final = s2.length;
for(let i = 0; i < s1.length;i++){
  if (s2.includes(s1[i])) {
      s2 = s2.replace(s1[i],'');
  } else count ++
}
return (final-(s1.length-count))+count;
}

let z = makingAnagrams(s1, s2);
console.log(z);




let s1 = 'cde';
let s2 = 'abc';
function makingAnagrams(s1, s2) {
    let str='';
    for (let i=0; i<s1.length;i++){
        if (s2.indexOf(s1[i]) === -1) {
          str=str+s1[i];
        } else {
          s2=s2.substring(0,s2.indexOf(s1[i]))+s2.substring(s2.indexOf(s1[i])+1,s2.length)
        }
    }
    return str.length+s2.length;
}

let z = makingAnagrams(s1, s2);
console.log(z);


function makingAnagrams(s1, s2) {
    var letters = Array(26).fill(0);
    assignWeight(letters, s1, 1);
    assignWeight(letters, s2, -1);

    var solution = letters.reduce(function (prev, curr) {
        return Math.abs(prev) + Math.abs(curr);
    });

    return solution;
}
function assignWeight(letters, word, weigth) {
    var charCode;
    for (var i = 0; i < word.length; i++) {
        charCode = word.charCodeAt(i) - 97;
        letters[charCode] += weigth;
    }
}
let z = makingAnagrams(s1, s2);
console.log(z);


let s1 = "cde";
let s2 = "abc";
function makingAnagrams(s1, s2) {
  let o1 = {};
  let o2 = {};
  let res = 0;

  for (let char of s1) o1[char] ? o1[char]++ : (o1[char] = 1);
  for (let char of s2) o2[char] ? o2[char]++ : (o2[char] = 1);

  Object.keys(o1).map((elem) =>
    o2[elem] ? (res += Math.abs(o1[elem] - o2[elem])) : (res += o1[elem])
  );
  Object.keys(o2).map((elem) => {
    if (!o1[elem]) res += o2[elem];
  });

  return res;
}
let z = makingAnagrams(s1, s2);
console.log(z);

