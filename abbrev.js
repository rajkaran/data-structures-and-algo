// i18n -- "internationalization"
// l10n -- "localization"
// r6n -- "rajkaran"

// O(n)
function abbrev1(s) {
  if (s.length < 4) {
    return s;
  }
  const sArr = s.split("");

  const last = sArr.splice(sArr.length - 1);
  const first = sArr.splice(0, 1);

  return `${first.join("")}${sArr.length}${last.join("")}`;
}

// O(1)
function abbrev(s) {
  if (s.length < 4) {
    return s;
  }

  return s[0] + (s.length - 2) + s[s.length - 1];
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
