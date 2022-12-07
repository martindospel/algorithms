// CLIMBING STAIRS USING MEMOIZATION

const climbStairs = (n, memo = {}) => {
  if (n <= 2) return n;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo[n] = res;
  return res;
};

console.log(climbStairs(0)); //1
console.log(climbStairs(5)); //8
console.log(climbStairs(7)); //21
console.log(climbStairs(21)); //17711
console.log(climbStairs(50)); //20365011074

const climbStairs2 = (n, memo = {}) => {
  if (n <= 2) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = climbStairs2(n - 1, memo) + climbStairs2(n - 2, memo);
  return memo[n];
};

console.log(climbStairs2(0));
console.log(climbStairs2(5));
console.log(climbStairs2(7));
console.log(climbStairs2(21));
console.log(climbStairs2(50));

//another solution using post decrement

const climbStairs3 = (n) => {
  let a = 0,
    b = 1;
  while (n-- > 0) {
    b = a + b;
    a = b - a;
  }
  return b;
};

console.log(climbStairs3(0));
console.log(climbStairs3(5));
console.log(climbStairs3(7));
console.log(climbStairs3(21));
console.log(climbStairs3(50));
