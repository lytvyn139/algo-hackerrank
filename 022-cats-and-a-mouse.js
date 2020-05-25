//https://www.hackerrank.com/challenges/cats-and-a-mouse
const x = 1; //mouse1
const y = 3; //mouse2
const z = 2; //rat


function catAndMouse(x, y, z) {
    const catAdistance = Math.abs(x - z)
    const catBdistance = Math.abs(y - z)
    if (catAdistance === catBdistance) {
        return 'Mouse C'
    } else if (catAdistance < catBdistance) {
        return 'Cat A'
    } else {
        return 'Cat B'
    }
} 
catAndMouse(x,y,z);

// function catAndMouse(x, y, z) {
//     return (Math.abs(x-z) > Math.abs(y-z)) ? 'Cat B' : ((Math.abs(x-z) < Math.abs(y-z)) ? 'Cat A' : 'Mouse C')

// }
// catAndMouse(x,y,z);
