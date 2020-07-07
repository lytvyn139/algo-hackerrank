//https://www.hackerrank.com/challenges/library-fine
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) {
        return 10000
    }

    if (y1 === y2) {
        if (m1 > m2) {
            return (m1 - m2) * 500
        }

        if (m1 === m2 && d1 > d2) {
            return (d1 - d2) * 15
        }
    }
    return 0
}
z = libraryFine(9, 6, 2015, 6, 6, 2015)
console.log(z)