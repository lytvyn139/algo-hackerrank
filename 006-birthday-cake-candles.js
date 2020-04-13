//https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function birthdayCakeCandles(ar) {
    let highest = 0;
    let count = 0;
    
    ar.forEach ((candle) => {
        if (candle > highest) {
            highest = candle;
            count = 1;
        } else if (candle === highest){
            count++;    
        }
    });
    return count;
}

