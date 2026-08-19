function numJewelsInStones(jewels, stones) {
  let count = 0;
  let set = new Set();
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }
  return count;
  console.log(set);
}


console.log(numJewelsInStones("aA","aAAbbbb"))