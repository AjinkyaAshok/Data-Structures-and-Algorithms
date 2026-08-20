function balancedStringSplit(s) {
  let max = 0;
  let r = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == "R" ? ++r : ++l;

    if (r === l) ((r = l = 0), max++);
  }
  return max;
}

console.log(balancedStringSplit("RLRRLLRLRL"));


//time-o(n) and space-o(1)