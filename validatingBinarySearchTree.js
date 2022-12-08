const isValidBST = (root) => {
  const valid = (root, left, right) => {
    if (root === null) return true;
    while (root.val < right && root.val > left) {
      return (
        valid(root.left, left, root.val) && valid(root.right, root.val, right)
      );
    }
    return false;
  };
  return valid(root, -Infinity, Infinity);
};
