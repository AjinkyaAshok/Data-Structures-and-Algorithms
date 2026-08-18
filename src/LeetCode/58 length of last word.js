function lenghtOfLastWord(string) {
  let n = string.length - 1;
  let count = 0;

  while (n >= 0) {
    if (string[n] === " ") {
      --n;
    } else {
      break;
    }
  }
  while (n >= 0) {
    if (string[n] != " ") {
      --n;
      ++count;
    } else {
      break;
    }
  }
  return count;
}

console.log(lenghtOfLastWord("hello world its ajinkya   "));
