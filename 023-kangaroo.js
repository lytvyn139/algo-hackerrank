//https://www.hackerrank.com/challenges/kangaroo/forum
function kangaroo(x1, v1, x2, v2) {
    if(v2 < v1) {
        let numberOfJumps = (x2-x1)/(v1-v2);
        if(numberOfJumps - Math.floor(numberOfJumps) === 0)
            return "YES";
    }
    return "NO";
}
kangaroo(2,1,1,2);
//kangaroo(0,2,5,3);

