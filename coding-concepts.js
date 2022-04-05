// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
 console.log(cohort.split(""))

// a) Your answer: return an array with each character as a value ['B','r','a', ect]
// b) Verify and explain: ['B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '2']


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: output was undefined because there is not a return in the function


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer: undefined
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] even without a return the function ran and console.log(multBy2) invoked it


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: [ 11, 13, 15 ] %2 !==0 filter the odd numbers and puts it into an array

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript in the object .languages refers to the array, and [0] refers to the index 0


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: learnStudent {student: 'George', cohort: 'Bravo', year: 2022}
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } George was passed as an argument to fill in the name inside of th object and output the class Learn
