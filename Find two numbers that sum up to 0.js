let arr = [0, 2, 1, -1, 4, 6, -4, -2];
for (let index = 0; index < arr.length; index++) {
  let startingIndex = index;
  let startElement = arr[startingIndex];
  for (let j = 0; j < arr.length; j++) {
    let sum = startElement + arr[j];
    if (sum == 0) {
      console.log("index are", j, startingIndex);
    }
  }
}
