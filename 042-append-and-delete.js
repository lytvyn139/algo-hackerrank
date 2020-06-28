//https://www.hackerrank.com/challenges/append-and-delete/

const s = 'abc'
const t = 'def'
const k = 6
function appendAndDelete(s, t, k) {
    let stringS = s.split('')
    let stringT = t.split('');
    if( (stringT.length > stringS.length) && (k - stringT.length - stringS.length) % 2 !== 0){
        return 'No'
    }
    for(let i in stringS){
        if(stringS.slice(0,i).join('') !== stringT.slice(0,i).join('')){
            if(stringS.slice(i-1).length + stringT.slice(i-1).length > k){
                return 'No'
            }
        }
    }
    return 'Yes'
}
console.log( appendAndDelete(s,t,k) );