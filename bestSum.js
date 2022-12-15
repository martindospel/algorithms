// const bestSum = (target, numbers, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === 0) return [];
//   if (target < 0) return null;

//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remainder = target - num;
//     const remainderCombination = bestSum(remainder, numbers, memo);
//     if (remainderCombination !== null) {
//       const combination = [...remainderCombination, num];
//       if (
//         shortestCombination === null ||
//         combination.length < shortestCombination.length
//       ) {
//         shortestCombination = combination;
//       }
//     }
//   }
//   memo[target] = shortestCombination;
//   return shortestCombination;
// };

// console.log(bestSum(8, [3, 2, 5]));
// console.log(bestSum(22, [2, 4, 6, 8]));
// console.log(bestSum(1000, [1, 100, 10000, 50000]));
// console.log(bestSum(0, []));
