const halloweenFood = [
    {
        name: "toffe apples",
        price: "£0.75",
        expirationDate: "01.11.2021"
    },
    {
        name: "pumpkin",
        price: "£1.50",
        expirationDate: "01.11.2021"
    },
    {
        name: "chocolate decorated apples",
        price: "£0.75",
        expirationDate: "31.10.2021"
    },
    {
        name: "chocolate retro apples",
        price: "£0.75",
        expirationDate: "31.10.2021"
    }
]

let appElement = document.getElementById("app")

halloweenFood.forEach(function(foodItem) {
  const foodItemHTML = `<p>${foodItem.name}</p><p>${foodItem.price}</p>`
  appElement.innerHTML += foodItemHTML
})

// halloweenFood.forEach(function(foodItem) {
//   let para1 = document.createElement("P")
//   let para2 = document.createElement("P")
//
//   para1.innerHTML = foodItem.name
//   para2.innerHTML = foodItem.price
//
//   appElement.appendChild(para1)
//   appElement.appendChild(para2)
// })
