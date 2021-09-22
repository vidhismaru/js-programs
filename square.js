//ForEach
function findSquare(arr) {
  // [ 4, 26, 36]
  const newArr = [];
  arr.forEach(function (i) {
    const res = i * i;
    newArr.push(res);
  });
  return newArr;
}
//Map
function findSquare(arr) {
  // [ 4, 26, 36]
  return arr.map(function (i) {
    const res = i * i;
    return res;
  });
}
let sqrArray = findSquare(arr1);
console.log(sqrArray);
