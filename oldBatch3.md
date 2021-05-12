# Whiteboarding!!!
Resources to practice problems:
hackerrank.com
leetcode.com
triplebyte.com
codingclub.com

There is a chance that in your interview process, you will be asked to solve a coding problem on a whiteboard. There are some key differences between this and solving a problem on your computer:

1. You can't run the code to see if it works
1. You don't have any features of your text editor that you're familiar with
1. You have someone watching you which can be very anxiety-inducing.
1. You have to learn to draw characters that you've never drawn before, like & and {}

Fortunately, there are some helpful strategies for whiteboarding:

1. Specify the data types of the input and return values.
1. Spend the first chunk of time talking about the problem with the interviewer before you start writing. Explore the problem until you are comfortable with what it's asking. Ask for some sample input data, and what the expected output should be.
1. Think about edge cases: what should happen if the data is in an extreme case (for example, if solving a problem about arrays, what should happen if the array is empty? If solving a problem about numbers, what should happen if plug in 0, or negative numbers?)
1. Write or draw out an approach to solving the problem that does not involve any code. For example, a diagram or plain sentences.
1. Start writing the code, following your own road map. For each step, say out loud what you need to do, then write it out.
1. Check your result by putting in a sample input, and following it through one line at a time. It's helpful to mark the values of any variables off to the side after each line.

Here are a few things that help reduce whiteboarding anxiety:
1. Remember that no one is born good at this! It is a skill that takes practice.
1. Remember that no single job interview is worth freaking out over! Most job searches involve between 3 and 6 interviews, and >50% of interviews do not involve a whiteboarding problem. So if a whiteboarding interview goes badly, it's just one part of your job search.
1. The point of a whiteboarding problem is to see how you think through something out loud and in a semi-social setting, and to see if you can achieve at least partial brain function under pressure. It is not supposed to focus on precise syntax or to get it perfect on the first try. (If your interviewer is looking for perfection and syntax, they are a bad interviewer!)

We're going to do a few together, then break into groups and do more.

### Instructor: Find max
The purpose of this exercise is: a warmup

Given an array of numbers, find the largest number in the array.

### Instructor: Consecutive sequence in an array
The purpose of this exercise is: exploring the problem statement and edge cases.

Given an array of numbers, find the longest sequence of consecutive numbers in the array.


### Instructor: Luhn Algorithm
The purpose of this exercise is: working with a changing problem statement. Often in whiteboard problems, additional phases of the problem are revealed as you finish each one.

The Luhn Algorithm is a way to check whether a user has made an error entering a credit card number. It works like this: if you add up all the digits in the credit card number, the result should be evenly divisible by 10. (If it isn't, then one or more digits was entered incorrectly.)

We are going to do 3 separate sub-problems for this:
1. Write a function `luhnCheck` that determines whether a CC number is valid, according to the above criteria.
1. The first 15 digits of a CC number represent important info, such as the CC company. But the last digit is reserved for satisfying the check condition. Write a function `findLastDigit` that takes in a 15 digit CC number and determines what its last digit must be so that the number is valid.
1. Aside from entering a wrong digit, the next most common typo is swapping the order of 2 digits. (What happens in our algorithm in this case?) One solution is to double every other digit in the card before we add them together. Modify our `luhnCheck` to work this way.
1. Modify our `findLastDigit` to account for the modification we just made to `luhnCheck`.


luhn
consecutive sequence in an array
max

### In Groups: Find duplicates
Given an array of individual letters, return an array that contains just the letters that appear more than once.

Sample 1: ['a', 's', 'd', 'f', 'a', 'd'] --> ['a', 'd'] </br>
Sample 2: ['a', 's', 'd', 'f'] --> []

## In Groups: Find uniques
Given an array of individual letters, return an array that contains just the unique letters.

Sample 1: ['a', 's', 'd', 'f', 'a', 'd'] --> ['a', 's', 'd', 'f'] </br>
Sample 2: ['a', 's', 'd', 'f'] --> ['a', 's', 'd', 'f']


### In Groups: Count characters
Given a string, return an object that contains the counts of each character in the string.

Sample 1: 'abcd' --> { a: 1, b: 1, c: 1, d: 1 } </br>
Sample 2: 'good food' --> { g: 1, o: 4, f: 1, d: 2 }

### In Groups: Merge 2 sorted arrays
Given 2 sorted arrays of numbers, return 1 array that contains the combined elements of the 2 arrays, sorted.

Note: you can solve this by just blindly smooshing the arrays together and then sorting the result. That solution is not accepted!

Sample 1: [1,3,5] and [2,4,6] --> [1,2,3,4,5,6] </br>
Sample 2: [1,1,1] and [2,2,2] --> [1,1,1,2,2,2] </br>
Sample 3: [1,2,3] and [] --> [1,2,3]

### In Groups: Get n primes
Given a number n, return the first n prime numbers.

Sample 1: 8 --> 2, 3, 5, 7, 11, 13, 17, 23


### In Groups: Intersection of two arrays
Given two arrays, return an array that includes all the elements that are in both input arrays.

Note that this problem has two major solutions: the fast way and the slow way.

Sample 1: [1,2,3] and [2,3,4] --> [2,3] </br>
Sample 2: [1,2,3] and [] --> []

### In Groups: twoSum
Given an array of numbers and a single number, find two elements in the array add up to the single number. Return the indices of the two elements. If there are no 2 elements in the array that add up to the single number, return null.

Sample 1: [10,15,20] and 25 --> 0, 1 </br>
Sample 2: [10,15,20] and 30 --> 0, 2 </br>
Sample 3: [10,15,20] and 11 --> null
