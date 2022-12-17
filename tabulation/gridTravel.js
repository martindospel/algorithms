const gridTraveler = (m, n) => {
  //initialize 2d table with length of m plus 1 to include it (because indeces start at 0)
  //fill each element with its own table populated with zeros
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  //iterating over the tables within parent table
  for (let i = 0; i <= m; i++) {
    //iterating over each element within child table
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      //if the right position is within bounds of the table, increment the columns by 1
      if (j + 1 <= n) table[i][j + 1] += current;
      //if the down position is within bounds of the table, increment the rows by 1
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  //return final tabulated sum at last position
  return table[m][n];
};

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(3, 9));
console.log(gridTraveler(21, 23));
