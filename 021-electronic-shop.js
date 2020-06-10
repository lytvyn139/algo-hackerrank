//https://www.hackerrank.com/challenges/electronics-shop/
const keyboards = [40,50,60];
const drives = [5,8, 1, 12];
const b = 60;

function getMoneySpent(keyboards, drives, b) {
    let best = -1
    keyboards.sort((a, b) => b - a);
    drives.sort((a, b) => a - b);
    //console.log(keyboards.sort((a, b) => b - a);)
    //console.log(drives.sort((a, b) => b - a);)

    for (let i = 0, j = 0; i < keyboards.length; i ++){
        for (let j = 0; j < drives.length; j ++){
            let sum = keyboards[i] + drives[j];
            if (sum > b) break;
            //combined > best ? best = combined : null
            if (sum > best) {
              best = sum
            } else best = null;
            
        }
    }
    return best
}
getMoneySpent(keyboards, drives, b);


