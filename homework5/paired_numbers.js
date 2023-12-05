// вивести тільки парні числа з масиву, вивести в зворотньому порядку
// example: getPaired(new Array(1,2,3,4,5,6)) => [6,4,2]
function getPaired(array1) {
    const array2 = [];

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 === 0 || (i < array1.length - 1 && array1[i] > array1[i + 1])) {
            array2.push(array1[i]);
        }
    }
    array2.reverse(); // Reverse the array
    console.log(array2);
}

// Example usage:
const exampleArray = [1, 2, 3, 4, 5, 6];
getPaired(exampleArray);
