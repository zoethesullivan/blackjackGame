let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You WIN!"
    hasBlackJack = true
  } else {
    message = "Busted!"
    isAlive = false
  }  
}
console.log(message)
