//1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    console.log(maxOfTwoNumbers(3, 9));
//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
function maxOfThreeNumbers(x, y, z){
        if (x > y && x > z) {
            return x;
        } else if(y > x && y > z) {
            return y;
        } else {
            return z;
        }
    }
    console.log(maxOfThreeNumbers(3, 5, 8));
    
//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    char = char.toLowerCase()
    return (vowel.includes(char))
}
console.log(isCharAVowel('G'));

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
function sumArray (x, y, z) {
    return
}
console.log(7, 5, 9);

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numberArgs = function (a, b, c) {
    return arguments,length
}
console.log(numberArgs(1, 2, 3))
//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(array, num) {
    const foundWords = []
    for (let i = 0; i < array.length; i +=1 ) {
if (array[i].length > num) {
    foundWords.push(array[i])
}
    }

    return foundWords
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))