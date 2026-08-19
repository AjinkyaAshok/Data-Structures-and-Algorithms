var findWordsContaining = function (words, x) {
  let output = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        output.push(i);
        break
      }
    }
  }
  return output;
};
console.log(findWordsContaining(["hello", "world"], "l"));
