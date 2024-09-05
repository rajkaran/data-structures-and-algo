// i18n -- "internationalization"
// l10n -- "localization"
// r6n -- "rajkaran"

function abbrev1(s) {
  if (s.length < 4) {
    return s;
  }
  const sArr = s.split("");

  const last = sArr.splice(sArr.length - 1);
  const first = sArr.splice(0, 1);

  return `${first.join("")}${sArr.length}${last.join("")}`;
}

function abbrev(s) {
  if (s.length < 4) {
    return s;
  }

  const sArr = s.split("");
  return sArr[0] + (sArr.length - 2) + sArr[sArr.length - 1];
}

console.log(abbrev("rajkaran"));
console.log(abbrev("rajkara"));
console.log(abbrev("rajkar"));
console.log(abbrev("rajka"));
console.log(abbrev("rajk"));
console.log(abbrev("raj"));
console.log(abbrev("ra"));
console.log(abbrev("r"));
console.log(abbrev(""));
