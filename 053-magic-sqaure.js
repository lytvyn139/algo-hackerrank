//https://www.hackerrank.com/challenges/magic-square-forming/
function formingMagicSquare(s) {
  let solutions = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
  ];
  let effortList = [];
  let combineArray = [...s[0], ...s[1], ...s[2]];

  solutions.forEach((solution) => {
    let effort = 0;
    for (let i = 0; i < combineArray.length; i++) {
      effort += Math.abs(combineArray[i] - solution[i]);
    }
    effortList = [...effortList, effort];
  });

  return Math.min(...effortList);
}
