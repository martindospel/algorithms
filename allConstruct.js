//memoizing this one unfortunately doesn't solve the issue when I have to create a very large 2d array

const allConstruct = (target, wordBank, memo = {}) => {
  //if the target is empty string, return 2d array, no words taken from wordBank
  if (target === "") return [[]];
  if (target in memo) return memo[target];
  let result = [];
  for (let word of wordBank) {
    //check is there is a prefix
    if (target.indexOf(word) === 0) {
      //get everything after the word
      const stringWithoutPrefix = target.slice(word.length);
      //now get back all of the ways to make the stringWithoutPrefix
      const arrayOfWaysToBuildStringWithoutPrefix = allConstruct(
        stringWithoutPrefix,
        wordBank,
        memo
      );
      //how can all the ways to build the previous string be used to build the target
      //map over all the ways to build previous string and add word to the front of it
      const arrayOfWaysToBuildTarget =
        arrayOfWaysToBuildStringWithoutPrefix.map((way) => [word, ...way]);
      result.push(...arrayOfWaysToBuildTarget);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("santa", ["san", "s", "aa", "a", "ta"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("joeydoeyloey", ["joe", "j", "d", "oey", "l"]));
console.log(allConstruct("dundee", ["joe", "j", "d", "oey", "l"]));
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeees", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
);
