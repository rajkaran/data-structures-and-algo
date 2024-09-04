function moveNumberInFront(alphnum) {
    let chars = alphnum.split("");

  let num = [];
  let char = [];

  for (let i = 0, len = chars.length; i < len; i++) {
    if (!isNaN(chars[i])) {
      num.push(chars[i]);
    } else {
      char.push(chars[i]);
    }
  }

  return num.join("") + char.join("");

}

console.log(moveNumberInFront("he123jsdjib"));