//https://www.hackerrank.com/challenges/beautiful-triplets/
const d = 3
const arr = [1,2,4,5,7,8,10]
function beautifulTriplets(d, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i] + d) != -1) {
            if (arr.indexOf(arr[i] + 2 * d) != -1) {
                result++;
            }
        }
    }
    return result;
}
console.log( beautifulTriplets(d, arr)) //3
