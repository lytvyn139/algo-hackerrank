//https://www.hackerrank.com/challenges/pangrams/problem
let s = 'The quick brown fox jumps over the lazy dog';
function pangrams(s) {
  let condition = 'abcdefghijklmnopqrstuvwxyz';
  let sCount=0;
  let conditionCount=0;
  s = s.toLowerCase().split('');
  condition = condition.toLowerCase().split('');
  s.sort();

  for(let i=0; i<s.length; i++){
      if(s[i] === condition[conditionCount]){
          sCount++;
          conditionCount++;
        }
    }
    if(sCount === 26)
        return "pangram";
    return "not pangram"; 
}
pangrams(s);

/*  FANCY
let o = {}
    s = s.toLowerCase().replace(/\s/g, '');
    for (let char of s) {
        o[char] ? o[char]++ : o[char] = true;
        if (Object.keys(o).length == 26)
            return 'pangram'
    }
    return 'not pangram'
 */
