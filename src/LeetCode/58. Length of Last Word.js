function lenghtOfLastWord(string) {
  let n = string.length - 1;
  let count = 0;

  while (n > 0) {
    if (string[n] != " ") break;
    --n;
  }
  while (n > 0) {
    if (string[n] === " ") break;
    --n;
    ++count;
  }
  return count;
}

console.log(lenghtOfLastWord("hello world its ajinkya   "));


  while (n > 0) {
    if (string[n] != " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    --n
  }