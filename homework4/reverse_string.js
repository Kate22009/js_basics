
//Function that reverts order of thwe string variables
function reverse(inputString) {
    return inputString.split('').reverse().join('');
}

let inputString = "aba";
const reversedString = reverse(inputString);
console.log(reversedString);

//Function that check if a string is palindrome
function isPalindrome(inputString, reversedString) {
    if (inputString === reversedString) {
        console.log("True");
    } else {
        console.log("False");
    }
}

isPalindrome(inputString, reversedString);
