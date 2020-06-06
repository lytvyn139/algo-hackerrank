//https://www.hackerrank.com/challenges/sock-merchant

n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//FASTEST
function sockMerchant(n, ar) {
    let socksTypes = ar.filter((x,i,a)=> a.indexOf(x)===i);
    let sockWithoutPair=0;
    console.log(socksTypes);
    for(let i=0;i<socksTypes.length;i++){
    if(ar.filter(obj => obj==socksTypes[i]).length%2!=0){
        sockWithoutPair++;
    }
    }
    return (n-sockWithoutPair)/2;
}
sockMerchant(n, ar);

/* 
n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// using Hashmap - O(n) time and space:
function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;
    for (let sock of ar) {
        colorCount[sock] = (colorCount[sock] || 0) + 1;
        if (colorCount[sock] % 2 === 0) {
            pairs++;
        }
    }
    return pairs;
}
sockMerchant(n, ar);
 */
/* 
n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
function sockMerchant(n ,ar) {
    if(!ar.length || ar.length === 1) return 0;
    
    const map = {};
    let count = 0

    for(let i = 0; i < ar.length; i++) {
        if(map[ar[i]]) {
            map[ar[i]] = map[ar[i]]+1;
            
            if(map[ar[i]] % 2 === 0) {
                count++;
            }
        } else {
            map[ar[i]] = 1;
        }
    }

    return count;
}
sockMerchant(n, ar) ;

/* 
//not passing all test
function sockMerchant(n, ar) {

    ar.sort();
    console.log(ar)
        let pairs =0;
        for (let i = 0; i < n-1; i+=2){
            if(ar[i] === ar[i+1]){
                pairs++
            }
        }
        return pairs;
    }
sockMerchant(n, ar) */


// Complete this function