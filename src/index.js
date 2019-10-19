module.exports = function solveSudoku(matrix) {
  for (let row = 0; row <= 8; row += 1) {
    for (let col = 0; col <= 8; col += 1) {
      if (matrix[row][col] === 0) {
        const rowArr = [];
        const colArr = [];
        const cellArr = [];
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i <= 8; i += 1) {
          for (let j = 0; j <= 8; j += 1) {
            if (i === row) {
              rowArr.push(matrix[i][j]);
            }
            if (j === col) {
              colArr.push(matrix[i][j]);
            }
            if (
              Math.floor(i / 3) === Math.floor(row / 3) &&
              Math.floor(j / 3) === Math.floor(col / 3)
            ) {
              cellArr.push(matrix[i][j]);
            }
          }
        }

        const correctValues = arr.filter(
          item =>
            !rowArr.includes(item) &&
            !colArr.includes(item) &&
            !cellArr.includes(item)
        );

        for (let k = 0; k < correctValues.length; k += 1) {
          matrix[row][col] = correctValues[k];
          const rec = solveSudoku(matrix);

          if (rec) {
            return rec;
          }
        }

        matrix[row][col] = 0;
        return false;
      }
    }
  }

  return matrix;
};
