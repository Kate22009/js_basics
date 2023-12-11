//#1 https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/?envType=daily-question&envId=2023-12-01
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    result_string_1 = word1.join('');
    result_string_2 = word2.join('');
    return result_string_1 === result_string_2
};

//#2 https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    // Define the alphabet mapping with '0' at index 0 and 'a' at index 1.
    const alphabet = '0abcdefghijklmnopqrstuvwxyz';
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            result.push(alphabet[parseInt(s[i] + s[i + 1])]);
            i += 2;
        } else {
            result.push(alphabet[parseInt(s[i])]);
        }  
    }
    return result.join('');
};
