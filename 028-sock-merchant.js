//https: //www.hackerrank.com/challenges/sock-merchant
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20] 
function sockMerchant(n, ar) {
    ar.sort();
    let pairs = 0;
    for (let i = 0; i < n - 1; i += 2) {
        if (ar[i] === ar[i + 1]) {
            pairs++
        }
    }
    return pairs;
}
sockMerchant(n, ar) //3