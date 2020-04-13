#https://www.hackerrank.com/challenges/camelcase/problem
function camelcase(s) {
//one liner regEx
return s.split(/[A-Z]/).length;
/* 
classic solution
let count = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            count++
        }
    }
    return count+1; 
*/


}
