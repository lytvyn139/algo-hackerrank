//https://www.hackerrank.com/challenges/encryption
function encryption(s) {
    const noSpace = s.replace(/\s+/, '');
    let row = Math.floor(Math.sqrt(noSpace.length));
    let col = Math.ceil(Math.sqrt(noSpace.length));
    if (row * col < noSpace.length) {
        row += 1;
    }

    let str = '';
    for(let i = 0; i < col; i += 1) {
        let skipper = i;
        let letterCounter = 0;
        while(letterCounter < row && skipper < s.length) {
            str += s[skipper];
            skipper += col;
            letterCounter += 1;
        }
        str += ' ';
    }
    return str.trim();

    /* 
    JS Solution without making a 2d grid, using the logic that the number of columns will be the number of words in the final string, with the rows being the max number of characters within each word. */
