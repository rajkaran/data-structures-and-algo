function swLongestSubString(s, k) {
    const charCount = {}; // To keep the count of characters in the current window
    let left = 0; // Left pointer of the window
    let maxFreq = 0; // Maximum frequency of a single character in the current window
    let maxLength = 0; // Maximum length of the substring found

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;
        maxFreq = Math.max(maxFreq, charCount[char]);
        console.log('right '+right, 'left '+left, 'char '+char, 'charCount[char] '+charCount[char], 'maxFreq '+maxFreq, 'maxLength '+maxLength, 'window size '+(right - left + 1))
        // Current window size is right - left + 1
        // If more than k characters need to be changed, shrink the window
        if (((right - left) + 1) - maxFreq > k) {
            const leftChar = s[left];
            charCount[leftChar]--;
            left++;
        }

        // Update the maximum length found
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const s = "AABABBA";
const k = 1;
console.log(swLongestSubString(s, k)); // Output: 4

const s1 = "AABABBA";
const k1 = 2;
console.log(swLongestSubString(s1, k1)); // Output: 4