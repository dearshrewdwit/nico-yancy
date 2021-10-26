# Today's exercise: Word Censor

#### Repo: boolean-uk-js-word-censor

#### Description
Our program takes in text, a list of words to censor, what to censor them with (**, BEEP, xxx, !!!, etc), and it returns a censored version of the text.

### Instructions
```js
const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";
```
- Use the above string as an input
- Create a function that censors the text input
- print out the censored text

## Exercise Process

1. Model the requirements

inputs | output
--- | ---
text (String)| result (String)
list of words (Array) |
replacement word (String) |

2. Use a small example
```js
const text = "My name is Yancy"
const listOfWords = ["Yancy", "Nico"]
const replacementWords = "Ed"
wordCensor(text, listOfWords, replacementWord) => "My name is Edward"
```

3. Write out in pseudo-code the steps.

-----

#### Challenge 1
Together with the new censored version, return a count of how many words were censored in the original text.

#### Challenge 2**
Instead of using hard-coded inputs, use prompts to grab:
- The full text to censor
- The words to be censored
- What should replace the censored words
