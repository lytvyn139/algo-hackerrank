//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?h_r=profile

let s = 'hackerrak'; //no
function hackerrankInString(s) {
    let taskString = s.split('');
    let condition = 'hackerrank'.split('');
    
    for(let item of condition){
        let findHackerrank = taskString.indexOf(item);
        if(findHackerrank === -1){
            return 'NO';
        }
        taskString.splice(0,findHackerrank+1);
    }
    return 'YES';
}
hackerrankInString(s);
