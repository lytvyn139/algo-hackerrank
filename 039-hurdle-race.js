//https://www.hackerrank.com/challenges/the-hurdle-race/
// k = [2,5,4,5,2]
// h = 7

k = [1, 6, 3, 5, 2]
height = 4
function hurdleRace(k, height) {
    const max = Math.max(...height);
    if(k >= max) {
        return 0;
    }
    return max - k;
    //return Math.max(0, Math.max(...height) - k); 
}

hurdleRace(k,height)
