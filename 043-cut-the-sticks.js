//https://www.hackerrank.com/challenges/cut-the-sticks/
const arr = [5, 4, 4, 2, 2, 8];
function cutTheSticks(arr) {
    let l = [];
    while (arr.length > 0) {
        let min = Math.min(...arr);
        let newArr = arr.filter(a => a !== min).map((a) => a - min)
        l.push(arr.length);
        arr = newArr;
    }
    return l;
}
cutTheSticks(arr);

