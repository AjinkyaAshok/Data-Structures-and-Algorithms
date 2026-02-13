let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

let k = 5;
for (let i = 0; i < k; i++) {
  let row =''
  for (let j = 0; j <= i; j++) {
    row = row + (i+1);
  }
  console.log(row)
}

let r = 5;
let sw = 1;
for (let i = 0; i < r; i++) {
  let row = "";
  
  for (let j = 0; j < i + 1; j++) {
    row = row + sw;
    sw == 1 ? (sw = 0) : (sw = 1);
  }

  console.log(row);
}
