//Runtime 102 ms, Memory 43.9 MB

const longestCommonPrefix = (strs) => {
  if (strs === null) return "";
  let prefix = "";
  let response = "";
  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    prefix += first[i];
    let find = strs.filter((s) => s.startsWith(prefix));
    if (find.length === strs.length) response = prefix;
  }
  return response;
};

//Runtime 67 ms, Memory 44.1 MB

const longestCommonPrefix2 = (strs) => {
  while (strs.length) {
    let prefix = "";
    let response = "";
    const first = strs[0];

    for (let i = 0; i < first.length; i++) {
      prefix += first[i];
      let find = strs.filter((s) => s.startsWith(prefix));
      if (find.length === strs.length) response = prefix;
    }
    return response;
  }
  return "";
};
