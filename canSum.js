const canSum = (target, numArray, memo = {}) => {
  if (target === 0) return true;
  if (target in memo) return memo[target];
  if (target < 0) return false;
  for (let num of numArray) {
    const remainder = target - num;
    if (canSum(remainder, numArray, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSum(8, [1, 1, 1, 1]));
console.log(canSum(8, [3, 2, 5]));
console.log(canSum(15, [3, 2, 5]));
console.log(canSum(99, [32, 21]));
console.log(canSum(150, [3, 2, 5]));
console.log(canSum(1500, [10, 8, 2]));
