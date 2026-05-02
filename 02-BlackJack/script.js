let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

let sumEl = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")
let cardsEL = document.querySelector("#card-el")

function startGame () {
   cardsEL.textContent = "Cards: " + firstCard + " " + secondCard
   sumEl.textContent = "Sum:  " + sum
if(sum <= 20) {
message = "Do you want to draw a new card? "
}
else if(sum === 21) {
message = "Wohoo! You've got Blackjack! "
hasBlackJack = true 
}
else {
   message ="You're out of the game! "
   isAlive = false
}

messageEl.textContent = message
}
 
function newCard() {
   console.log("Drawing a new card from the deck")
let newCard = 4
sum += newCard
 
startGame()

}

 
  
 
 