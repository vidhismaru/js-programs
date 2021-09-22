function toFindOne(Num) {
  let binary = Num.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }

  console.log("the string is = " + binary + " and count of 1 is:" + count);
  return count;
}
toFindOne(1118);

function toFindZero(Num) {
  let binary = Num.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      count++;
    }
  }

  console.log("the string is = " + binary + " and count of 0 is:" + count);
  return count;
}
toFindZero(1118);
