let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array of cards delt
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
  renderGame()
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 6) + 1 ;
  return randomCard;
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " " 
  }
  
  sumEl.textContent = "sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackJack = true
  } else {
    message = "Busted!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}