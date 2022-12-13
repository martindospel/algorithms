const howSum = (target, numArray, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of numArray) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, numArray, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(21, [5, 3, 4, 7]));
