//https://www.hackerrank.com/challenges/drawing-book/
const n = 6;
const p = 2;

//#1 
function pageCount(totalPages, findMePage) {
    let n = totalPages;
    let p = findMePage;

    if (findMePage <= totalPages / 2) return Math.floor(findMePage / 2);
    if (totalPages % 2) return Math.floor((totalPages - findMePage) / 2);
    return Math.ceil((totalPages - findMePage) / 2);
}
pageCount(n, p);

//#2
function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);
    console.log(pageTurns)
    console.log(totalTurns)
    return Math.min(pageTurns, totalTurns - pageTurns);
}
pageCount(n, p);

//#3
function pageCount(n, p) {
    let middlePage = n / 2;

    if (p > middlePage) {
        console.log("From last page");
        return n % 2 == 0 ? parseInt((n + 1 - p) / 2) : parseInt((n - p) / 2);

    } else {
        console.log("From first page");
        return parseInt(p / 2);
    }

}
pageCount(n, p);