function makePermutations(str) {
  let strarr = new Array();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      strarr.push(`${str[i]}+${str[j]}`);
    }
  }

  return strarr.join(",");
}

console.log(makePermutations("ab"));
