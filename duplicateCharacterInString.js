function findDuplicateChar(str1) {
  let duplicateString = [];
  let resultArr = [];
  for (let i = 0; i < str1.length; i++) {
    if (duplicateString.includes(str1[i])) {
      resultArr.push(str1[i]);
    } else {
      duplicateString.push(str1[i]);
    }
  }
  return resultArr.toString();
}
console.log("Duplicate Strings are - ", findDuplicateChar("abbcddddefbc"));
