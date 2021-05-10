# Functions, loops, and conditionals, oh my!!

#### WRITE ALL YOUR ANSWERS IN `starter.js` file. Test early, test often! Remember, you can use node for that by typing `node starter.js` in your terminal. 

#### But, you'll have to run this script in a web browser for some of the later questions since they ask you to use alerts and prompts. Instructions on how to do this are in `starter.js`.

### PART 0: Just DO it!!
Write a function `justDoIt` that accepts a string, your name, as an argument. The function should **return** a string that has your argument and the phrase "JUST DO IT".

```javascript
//example usage
justDoIt('Zack');
// => "Zack, JUST DO IT!";
```

### PART 1: Big or Small String?

#### You may have to dig into some documentation for some of these!

Write a **function** called `bigOrSmallString` that accepts one argument, a string, and **returns** "This word is loooooong!" if the string's length is greater than 10, and "This word is short 😬" otherwise.

### PART 2: Odd or Even String Length?
Write a **function** called `oddOrEvenString` that accepts one argument, a string, and **returns**
*"This string's length is odd..."* if the length is an odd number, and *"This string length is TOTALLY even!"* if the string length is even.

### PART 3: Median
Write a **function** called `medianOfArray` that takes an **array** as an argument.
The function should **return** the *median* number in an array.
Hmmmm, haven't you found a median of the array before? Maybe not..
> *Hint*: Use some kind of sorting method to put the values in order first, then somehow access the median element, somehow using the length of the array....maybe?

### PART 4: Sum Array

Create a **function** called `sumArray` that takes an array `arr` as an argument and **returns the sum** of all the numbers in the array. If the array is empty then return 0.

### PART 5: Vowel Count
Create a **function** called `vowelCount` that accepts a `str` as an argument and **returns** the number of vowels in that string.

### PART 6: Initials
Write a function called `initials` that accepts one argument (person's name) and returns their initials.
  - It should work both with and without middle name being provided.

```javascript
initials('Neil Patrick Harris');
// NPH
```

### PART 7: Days of the week
Write a **switch** JavaScript **statement** that prompts the user to specify what day is today. :date:
> How do you create a prompt popup in the browser? Google might know 🙃 

- If the user inputs Monday, alert "Energize!"
- Tuesday: "Just getting started!"
- Wednesday: "Over the hump!"
- Thursday: "Almost there!"
- Friday, Saturday, or Sunday: "Weeeeeee!"
- If it's not anything above, alert "What?? I don't understand you"

### PART 8: Palindromes

Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.

```javascript
console.log(checkPalindrome("Radar"));
```

> => true

```javascript
console.log(checkPalindrome("Borscht"));
```

> => false

### PART 9: Truth - y & False -y Checker
Create a **function** `truthyFalsey` that accepts an array as an argument `arr` (provided in the starter folder), goes through it, and **console logs** whether each element in the array is a truth-y or false-y value.

### BONUS: Double X Counter
Write a **function** called `countXx`. Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

```javascript
  countXx('abcxx')
  // 1
  countXx('xxx')
  // 2
  countXx('xxxx')
  // 3
```

### SUPER BONUS: Two-Dimensional Array
Write a **function** that takes a number `n` and returns a two-dimensional array that is n * n (n height by n length) consisting of all 0's.

Example:
```javascript
makeArray(4);
/* => [[0 0 0 0],
       [0 0 0 0],
       [0 0 0 0],
       [0 0 0 0]] */
 makeArray(5);
 /* => [[0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]] */
```
### SUPER MEGA BONUS!!!!!!
Change the previous function so that every time the height index `===` width index add a 1, instead of a 0.
Such that
`arr[0][0] = 1`, `arr[0][1] = 0`, `arr[1][0] = 0`, `arr[1][1] = 1`

Example:
```javascript
makeArray(4);
/* => [[1 0 0 0],
       [0 1 0 0],
       [0 0 1 0],
       [0 0 0 1]] */
 ```

