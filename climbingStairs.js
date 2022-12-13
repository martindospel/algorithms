// CLIMBING STAIRS USING MEMOIZATION

const climbStairs = (n, memo = {}) => {
  if (n <= 2) return n;
  if (n in memo) return memo[n];
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
  if (n in memo) return memo[n];
  memo[n] = climbStairs2(n - 1, memo) + climbStairs2(n - 2, memo);
  return memo[n];
};

console.log(climbStairs2(0));
console.log(climbStairs2(5));
console.log(climbStairs2(7));
console.log(climbStairs2(21));
console.log(climbStairs2(50));
