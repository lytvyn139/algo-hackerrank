//https://www.hackerrank.com/challenges/alternating-characters/problem

let s = 'BABABA';
function alternatingCharacters(s) {   
   let deletion = 0;
  for (let i=0; i < s.length; i++) {
      if (s.charAt(i) === s.charAt(i+1)) {
        deletion ++;
      } else deletion;
}return (deletion);
}
 

alternatingCharacters(s);


/* 
let s = 'ZAAABBB'
function alternatingCharacters(s) {   
let count = 0;
s.split('').map((x,i) => { 
  if(s[i] === s[i+1])
    { count++; 
  }});
  return count;
}
alternatingCharacters(s); */
