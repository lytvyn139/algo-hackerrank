//https://www.hackerrank.com/challenges/designer-pdf-viewer/forum
let h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"
let word = 'abc'

function designerPdfViewer(h, word) {
    return Math.max(...word.split('').map((e) => h[e.charCodeAt(0) - 97] * word.length));
}
console.log(designerPdfViewer(h, word));


let h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"
let word = 'abc'

function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const heights = [];
    for (let letter of word) {
        heights.push(h[alphabet.indexOf(letter)])
    }
    return heights.length * Math.max(...heights);
}
console.log(designerPdfViewer(h, word));