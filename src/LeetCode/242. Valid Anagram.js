function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let count = {};

  for (let ch of s) {
    if (count[ch]) {
      count[ch]++;
    } else {
      count[ch] = 1;
    }
  }
  for (let ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

console.log(validAnagram("haram", "marah"));
