// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("div3", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    expect(div3("15")).toEqual("15 is divisible by three")
    expect(div3("0")).toEqual("0 is divisible by three")
    expect(div3("-7")).toEqual("-7 is not divisible by three")
  })
})
//______________________________________________________________________
// ● div3 › takes a number as an argument and decides if the number is evenly divisble by three or not
//
//     ReferenceError: div3 is not defined
//
//       30 | describe("div3", () => {
//       31 |   it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
//     > 32 |     expect(div3("15")).toEqual("15 is divisible by three")
//          |     ^
//       33 |     expect(div3("0")).toEqual("0 is divisible by three")
//       34 |     expect(div3("-7")).toEqual("-7 is not divisible by three")
//       35 |   })
//
//       at Object.<anonymous> (code-challenges.test.js:32:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.119 s, estimated 1 s
//______________________________________________________________________


const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

//creat a function called div3
//use an if else statemant
//use %3 to determin if the number is divisable by 3
//use ${} to show the number in the statement

//test failed on -7, used console.log(-7%3) returned -1
// use Matth.abs to conver -1 to 1
// test passed


const div3 = (number) => {
  if (number %3 == 0) {
    return `${number} is divisible by three`
  } else if (Math.abs(number %3) == 1) {
    return `${number} is not divisible by three`
  }
}
//______________________________________________________________________
// PASS  ./code-challenges.test.js
//  div3
//    ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.141 s, estimated 1 s
//______________________________________________________________________


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capArray", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//______________________________________________________________________
// ● capArray › takes in an array of words and returns an array with all the words capitalized
//
//     ReferenceError: capArray is not defined
//
//       102 | describe("capArray", () => {
//       103 |   it("takes in an array of words and returns an array with all the words capitalized", () => {
//     > 104 |     expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//           |     ^
//       105 |     expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//       106 |   })
//       107 | })
//
//       at Object.<anonymous> (code-challenges.test.js:104:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s
//______________________________________________________________________

// b) Create the function that makes the test pass.
//
// create a function called capArray
// use .map to loop through each value
// capitalized the first letter with toUpperCase()
// oUpperCase capitalized the word.
// use charAt to select the first letter
// use slice to return the rest of the word lowwer cased


const capArray = (array) => {
  return array.map (array => array.charAt(0).toUpperCase() + array.slice(1))
}
//______________________________________________________________________
// PASS  ./code-challenges.test.js
//  div3
//    ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)
//  capArray
//    ✓ takes in an array of words and returns an array with all the words capitalized
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.146 s, estimated 1 s
//______________________________________________________________________

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//______________________________________________________________________
// ● firstVowel › takes in a string and logs the index of the first vowel
//
//    ReferenceError: firstVowel is not defined
//
//      165 | describe("firstVowel", () => {
//      166 |   it("takes in a string and logs the index of the first vowel", () => {
//    > 167 |     expect(firstVowel(vowelTester1)).toEqual("1")
//          |     ^
//      168 |     expect(firstVowel(vowelTester2)).toEqual("0")
//      169 |     expect(firstVowel(vowelTester3)).toEqual("2")
//      170 |   })
//
//      at Object.<anonymous> (code-challenges.test.js:167:5)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.157 s, estimated 1 s
//______________________________________________________________________


// b) Create the function that makes the test pass.
// create a funstion called firstVowel
//create a loop to iterate through each index looking for a vowel
// return the index of i at the first vowel

const firstVowel = (string) => {
  for (i=0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
    return string.indexOf(string[i])
  }
}
//______________________________________________________________________
// PASS  ./code-challenges.test.js
//   div3
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)
//   capArray
//     ✓ takes in an array of words and returns an array with all the words capitalized
//   firstVowel
//     ✓ takes in a string and logs the index of the first vowel
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.158 s, estimated 1 s
//______________________________________________________________________
