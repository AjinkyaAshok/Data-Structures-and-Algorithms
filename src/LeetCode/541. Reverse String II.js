function reverseStr(s) {
  s = s.toLowerCase();
  let filterStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filterStr += s[i];
    }
  }
  let rev = filterStr.split("").reverse().join("");
  return filterStr === rev;
}

console.log(reverseStr("A man, a plan, a canal: Panama"));
