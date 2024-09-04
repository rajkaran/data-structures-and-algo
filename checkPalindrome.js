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

console.log(checkPalindrome('awesome')); // false
console.log(checkPalindrome('foobar')); // false
console.log(checkPalindrome('tacocat')); // true
console.log(checkPalindrome('amanaplanacanalpanama')); // true

const status1 = checkPalindrome('A man, a plan, a canal. Panama');
console.log('is "A man, a plan, a canal. Panama" palindrome ', status1);


const status2 = checkPalindrome('almostomla');
console.log('is "almostomla" palindrome ', status2);

const status3 = checkPalindrome('anna');
console.log('is "anna" palindrome ', status3);