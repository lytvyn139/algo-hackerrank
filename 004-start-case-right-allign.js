/* https://www.hackerrank.com/challenges/staircase */

//STAIRCASE
staircase = (n) => {
  let resultStr = '';
  let result = [];
   for (let i = 0; i < n; i++){
      resultStr += '*';  
      result.push(' '+resultStr);
      console.log(resultStr)
    }
}
staircase(6);


staircase = (n) => {
  const empty = '#';
  for (let i = n; i > 0; i--) {
    console.log(empty.padStart(i, '+')); 
  }
  
}
staircase(10);


staircase = (n) => {
    if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
         for (let r = 1; r <= n; r++) {
              let blanks = [ ...[], ...Array(n - r) ].map(i => ' ');
              let hashes = [ ...[], ...Array(n - (n - r))].map(i => '#');
              console.log([
                   ...blanks,
                   ...hashes
              ].join(''));
         } 
    }
}
