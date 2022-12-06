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
console.log(climbStairs(1)); //1
console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs(4)); //5
console.log(climbStairs(5)); //8
console.log(climbStairs(6)); //13
console.log(climbStairs(7)); //21
console.log(climbStairs(21)); //17711
console.log(climbStairs(50)); //20365011074
