const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    //check if the word is a prefix
    if (target.indexOf(word) === 0) {
      //now slice everything after the prefix
      const numWaysForRest = countConstruct(
        target.slice(word.length),
        wordBank
      );
      totalCount += numWaysForRest;
    }
  }
  return totalCount;
};

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//   countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   countConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf", [
//     "a",
//     "aa",
//     "aaa",
//     "aaaa",
//     "aaaaa",
//   ])
// );

const countConstruct2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct2(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct2("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
