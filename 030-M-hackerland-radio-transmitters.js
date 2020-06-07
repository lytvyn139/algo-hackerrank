//https://www.hackerrank.com/challenges/hackerland-radio-transmitters
process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////////////////////////

function main() {
    let n_temp = readLine().split(' ');
    let n = parseInt(n_temp[0]);
    let k = parseInt(n_temp[1]);
    let houses = readLine().split(' ').map(Number).sort(function(a, b) { return a - b; });
    let house = houses[0], transmitter = houses[0], i = 0, towers = 0;

    while( i < n) {
        transmitter = houses[i];
        house = houses[i];
        towers++;
        while(i < n && (houses[i] - house) <= k){
            i++;
        }
        transmitter = houses[i-1];
        while(i < n && houses[i] <= transmitter + k){
            i++;
        }
    }
    console.log(towers);
}