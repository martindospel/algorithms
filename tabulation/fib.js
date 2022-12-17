const fib = (n) => {
  //fill the table with the desired length, adding one element to include n
  const table = Array(n + 1).fill(0);
  //assign 2nd element as 1
  table[1] = 1;
  //loop over table
  for (let i = 0; i <= n; i++) {
    //adding the current element total to one ahead of it and to the one ahead of that one
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  //return value of last element
  return table[n];
};

console.log(fib(6));
console.log(fib(12));
console.log(fib(50));
