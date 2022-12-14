const canConstruct = (targetString, wordBank) => {
  if (targetString === "") return true;
  for (let word of wordBank) {
    // if I have a prefix, I can use it to shrink the target.
    // Example "santa".indexOf("ant") will equal 1, "santa".indexOf("sa") will equal 0
    if (targetString.indexOf(word) === 0) {
      // now I slice everything after the index
      // Example:
      // word = "san",
      // targetString = "santa",
      // targetString.indexOf(word),
      // targetString.slice(word.length) will equal "ta"
      const stringWithoutPrefix = targetString.slice(word.length);
      if (canConstruct(stringWithoutPrefix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//   canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf", [
//     "a",
//     "aa",
//     "aaa",
//     "aaaa",
//     "aaaaa",
//   ])
// );

const canConstruct2 = (targetString, wordBank, memo = {}) => {
  if (targetString === "") return true;
  if (targetString in memo) return memo[targetString];
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const stringWithoutPrefix = targetString.slice(word.length);
      if (canConstruct2(stringWithoutPrefix, wordBank, memo) === true) {
        memo[targetString] = true;
        return true;
      }
    }
  }
  memo[targetString] = false;
  return false;
};

console.log(canConstruct2("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct2("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
