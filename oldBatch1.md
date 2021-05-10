# Function drills with objects & accumulators
### General Approach
For each drill,
- pseudocode your solution
- assign the input to a variable
- write the function
- invoke the function, assigning the return value to a new variable
- `console.log` the result

Example setup:
```
const inputValue = <the specified input>

function mySolution(parameterName) {
  // make the magic happen
  return myReturnValue
}

const outputValue = mySolution(inputValue)
console.log(outputValue)
```

Tips:
- Pseudocode until your steps are simple and easily translatable into code.
- Set up the above framework for a problem before you start building out the function
- Take baby steps and check your output after each one

### multipleLengths
Given: an array of strings, for example `['hey', 'whoa', 'whoooaaa']`
<br>
Expect: an object with those strings as keys, and the length of each string as a value, for example
```
{
  hey: 3,
  whoa: 4,
  whoooaaa: 8
}
```

### vowelCount
Given: an array of strings, for example `['hey', 'whoa', 'whoooaaa']`
<br>
Expect: an object with those strings as keys, and the number of vowels in each string as a value, for example
```
{
  hey: 1,
  whoa: 2,
  whoooaaa: 6
}
```

### justTheNames
Given: an array of objects that contain person data, for example:
```
[
  {
    name: 'Jordan',
    location: 'ATL'
  },
  {
    name: 'Mike',
    location: 'PVD'
    },
  {
    name: 'Pete',
    location: 'BOS'
  },
  {
    name: 'J',
    location: 'NYC'
  },
]
```


Expect: an array containing just the name values, for example:

```js
['Jordan', 'Mike', 'Pete', 'J']
```

### shortNamesOnly
Given: an array of person data (same as justTheNames)
Expect: an array containing just the name values that are less that 4 characters in length, for example: `['Mike', 'Pete', 'J']`
Tip: your answer to `justTheNames` should help! Look for a clever way to reuse it

### turtleBuilder

Given: the following 3 arrays

```
const names = ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']
const colors = ['blue', 'orange', 'red', 'purple']
const weapons = ['katanas', 'nunchuks', 'sais', 'bo staff']
```


Expect: the following array of objects

```
[
  {
    name: 'Leonardo',
    color: 'blue',
    weapon: 'katanas'
  },
  {
    name: 'Michelangelo',
    color: 'orange',
    weapon: 'nunchuks'
  },
  {
    name: 'Raphael',
    color: 'red',
    weapon: 'sais'
  },
  {
    name: 'Donatello',
    color: 'purple',
    weapon: 'bo staff'
  },
]
```

Tip: your function should take in 3 parameters, corresponding to the 3 input arrays

### fizzBuzz
Given: a single number `inputNumber`
- Expect: an object that contains 3 keys: 'fizz', 'buzz', and 'fizzBuzz'. Each key points to an array. The 'fizz' array should contain all number less than or equal to `inputNumber` that are multiples of 3. The 'buzz' array should contain all number less than or equal to `inputNumber` that are multiples of 5. The 'fizzBuzz' array contains all numbers less than or equal to `inputNumber` that are multiples of both 3 and 5.

Example input: `20`

Example output:

```
{
  fizz: [3, 6, 9, 12, 15, 18],
  buzz: [5, 10, 15, 20],
  fizzBuzz: [15]
}
```
