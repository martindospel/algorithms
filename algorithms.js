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

// console.log(climbStairs(0)); //1
// console.log(climbStairs(1)); //1
// console.log(climbStairs(2)); //2
// console.log(climbStairs(3)); //3
// console.log(climbStairs(4)); //5
// console.log(climbStairs(5)); //8
// console.log(climbStairs(6)); //13
// console.log(climbStairs(7)); //21
// console.log(climbStairs(21)); //17711
// console.log(climbStairs(50)); //20365011074

//another solution using post decrement
// const climbStairs = n => {
//     let a = 0,
//       b = 1;
//     while (n-- > 0) {
//       b = a + b;
//       a = b - a;
//     }
//     return b;
//   };

// MERGING LISTS INTO SORTED LISTS

function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
