// inputs | output
// --- | ---
// text (String)| result (String)
// list of words (Array) |
// replacement word (String) |

// const text = "My name is Yancy"
// const listOfWords = ["Yancy", "Nico"]
// const replacementWords = "Ed"
// wordCensor(text, listOfWords, replacementWord) => "My name is Edward"



const text = "My name is Yancy"
const listOfWords = ["dolore", "consectetur"]
const secondListOfWords = ["Nico", "Yancy"]
const replacementWord = "BLANK"

const exampleText =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

// 1. transform string into array of strings -> find the spaces in the string
// eg: "My name is Yancy" => ["My", "name", "is", "Yancy"]
// 1.01 look up how to do this transformation.
// const words = exampleText.split(' ')
// eg: ["My", "name", "is", "Yancy"] => a loop that runs


// 1.1 scan the text -> go through the array, in a loop
// for each item in the array: is the item equal to yancy or nico
// 2. compare it with the list of words that we have

// for (let i = 0; i < words.length; i++) {
//   const currentWord = words[i]
//   // if word is in the banned list
//   if (listOfWords.includes(currentWord)) {
//     // replace with replacement word
//     words[i] = replacementWord
//   } else {
//     // do nothing
//   }
//   // console.log(currentWord)
// }

// console.log(words)
// console.log(words.join(' '))
// const result = words.join(' ')

// 3. if matching word replace it with replacement word.


// 3.5 transform the array into a string
// 4. print the result


// end!
// console.log(result)



// function approach
// "My name is Yancy" => ["My", "name", "is", "Yancy"]
function nicosSplitter (textToSplit, boundary) {
  return textToSplit.split(boundary)
}

// function declaration ('pure')
function wordCensor (text, listOfWords, replacementWord) {
  const words = nicosSplitter(text, ' ')
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]
    if (listOfWords.includes(currentWord)) {
      words[i] = replacementWord
    } else {
    }
  }
  const result = words.join(' ')
  return result
}

console.log(wordCensor(exampleText, listOfWords, replacementWord))
console.log(wordCensor(text, secondListOfWords, replacementWord))

// => "My name is Edward"
