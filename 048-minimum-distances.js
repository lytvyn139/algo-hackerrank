//https://www.hackerrank.com/challenges/minimum-distances
const a = [7, 1, 3, 4, 1, 7];

function minimumDistances(a) {
    let min = -1;
    for(let i = 0; i < a.length; i++){
        let id = i + 1;
        while(id !== 0){
            id = a.indexOf(a[i], id) + 1;
            const diff = (id - 1) - i;
            min = (diff >= 0 && (diff < min || min === -1)) ? diff : min;
        }
    }
    return min;
}
let z = minimumDistances(a); //3
console.log(z);


// const a = [7, 1, 3, 4, 1, 7];

// function minimumDistances(a) {
//     let lastseen = {};
//     let dist = -1;
//     [...a].forEach((v, i) => {
//         if (lastseen.hasOwnProperty(v)) {
//             let thisdist = i - lastseen[v];
//             dist = Math.min(thisdist, (dist === -1 ? thisdist : dist));
//         }
//         lastseen[v] = i;
//     });
//     return dist;
// }
// let z = minimumDistances(a); //3
// console.log(z);
