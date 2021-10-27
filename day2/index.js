
// function declaration

function greet(name) {
  console.log("hello, " + name + "!")
}

// function call or function invocation
// function name + the ()
//console.log(greet)
//console.log(greet("Yancy"))


const names = ["Yancy", "Nico", "Ed"]
// greet each person.

names.forEach(function(element) {
  console.log("hello, " + element + "!")
})

names.forEach(greet)



//for (let i = 0; i < names.length; i++) {
//  console.log("hello, " + names[i] + "!")
//}
