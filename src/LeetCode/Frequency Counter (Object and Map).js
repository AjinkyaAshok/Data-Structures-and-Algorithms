var arr = [1, 2, 2, 3, 1, 4, 2];

function frequencyCount(arr) {
  let freq = {};
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return freq;
}

console.log(frequencyCount(arr));

//using map

function frequencyCounter() {
  const map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num)|| 0) +1)
  }
  return map
}

console.log(frequencyCounter(arr))