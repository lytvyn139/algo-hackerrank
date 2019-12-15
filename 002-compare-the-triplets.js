/* 
https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/
compareTriplets = (a, b) => {
    let alice = 0;
    let bob = 0;
    for (let i=0; i<a.length;i++) {
        if (a[i] > b[i]) {
            alice ++;
        } else if (a[i] < b[i]) {
            bob ++;
        } else {
          alice = alice;
          bob = bob;
        }
    }
    return [alice, bob];
}
let alice = [17, 28, 30];
let bob = [99, 16, 8];
compareTriplets(alice, bob)