//https://www.hackerrank.com/challenges/apple-and-orange
countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let totalApples = 0;
    let totalOranges = 0;
    for (let i = 0; i <= apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            totalApples += 1;
        }
    }
    for (let i = 0; i <= oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            totalOranges += 1;
        }
    }
    console.log(totalApples);
    console.log(totalOranges);
}
let z = countApplesAndOranges(s, t, a, b, apples, oranges);
console.log(z);

// //fastest
// countApplesAndOranges = (s, t, a, b, apples, oranges) => {
//     return [
//         apples.map(p => p + a).filter(p => p >= s && p <= t).length,
//         oranges.map(p => p + b).filter(p => p >= s && p <= t).length
//     ]
// }

// countApplesAndOranges = (s, t, a, b, apples, oranges) => {
//     let apple_count = apple.filter(value => value + a >= s && value + a <= t).length;
//     let orange_count = orange.filter(value => value + b >= s && value + b <= t).length;
// }


