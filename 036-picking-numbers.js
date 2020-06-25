//https://www.hackerrank.com/challenges/picking-numbers
function pickingNumbers(a) {
    const arr = new Array(a.length);
    a.forEach(v => {
        arr[v] = arr[v] + 1 || 1;
        arr[v+1] = arr[v+1] + 1 || 1;
    });
    return arr.reduce((m, v) => Math.max(m, v), 0);
}

