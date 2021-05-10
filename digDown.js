/*
Imagine an array that is guaranteed to have length 1, ie it contains just a single element. That element will be either a string or an array. If it's an array, it will contain just a single element, and that single element will be either a string or an array. And so on: that array will contain just one element, which could be a string or an array... to create a russian nesting doll array of unknown depth of layers. One example of such an array is below. Before moving on, take a minute to draw a few similar arrays of your own.

[
  [
    [
      ["hi"]
    ]
  ]
]

Write a function called digDown that accepts a nested array of unknown depth as an argument. digDown drills down through the nested array until it finds the string, and returns the string.

Implement digDown twice, once using a loop and once using recursion. (You can give them different names, like digDownLoop and digDownRecursion.) They should both result in exactly the same output. Do whichever makes more sense first! Hot tip: after defining your function, test drive it on several test cases.

Next level: once you have digDown working with both a loop and recursion, enhance both functions as follows. Instead of returning just the string at the core of the array, your function should return an object like this:
{
  target: "hi",
  layers: 4 // this is the number of layers that we had to dig through to find it. the above example had 4 layers of arrays
}

*/
