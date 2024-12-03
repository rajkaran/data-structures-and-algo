/**
 * Is  the given string a palindrome?
 */

// O(n)
function checkPalindrome(str) {
    let clean = str.replace(/[^a-zA-z]/gi, '');

    let sarr = clean.toLowerCase().split('');
    let clone = sarr.slice();

    sarr.reverse();

    return (clone.join('') == sarr.join(''));
}


// O(n/2) simplifies to O(n)
function checkPalindrome1(str) {
    let clean = str.replace(/[^a-zA-z]/gi, '');
    let firstIndex = 0;
    let lastIndex = clean.length - 1;

    while(firstIndex !== lastIndex){
        if(clean[firstIndex] !== clean[lastIndex]){
            return false
        }

        firstIndex++;
        lastIndex--;
    }
  
    return true;
}

console.log(checkPalindrome1('awesome')); // false
console.log(checkPalindrome1('foobar')); // false
console.log(checkPalindrome1('tacocat')); // true
console.log(checkPalindrome1('amanaplanacanalpanama')); // true

// const status1 = checkPalindrome('A man, a plan, a canal. Panama');
// console.log('is "A man, a plan, a canal. Panama" palindrome ', status1);


// const status2 = checkPalindrome('almostomla');
// console.log('is "almostomla" palindrome ', status2);

// const status3 = checkPalindrome('anna');
// console.log('is "anna" palindrome ', status3);