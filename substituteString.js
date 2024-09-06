/*

s = "Alice saw a tiger"
     01234567890123456

substitutions = [ 
  (0, 5, "Bob"),   # Alice -> Bob
  (12, 17, "cat")] # tiger -> cat

output: "Bob saw a cat"


*/

assert = require("assert");

// O(n.m)
function substitute(str, subArr) {
  if (str === null) {
    return;
  }

  let strArr = str.split("");

  for (let i = 0; i < subArr.length; i++) {
    // -- y
    let subStrArr = subArr[i][2].split("");

    let subIndex = 0;
    for (let j = subArr[i][0]; j < subArr[i][1]; j++) {
      // -- x
      strArr[j] = subStrArr[subIndex];

      subIndex++;
    }
  }

  return strArr.filter((ele) => ele != undefined).join("");
}

// 0,5 "bobbob" bobbo - error

console.log(
  substitute("Alice saw a tiger", [
    [0, 5, "Bob"],
    [12, 17, "cat"],
  ])
);
