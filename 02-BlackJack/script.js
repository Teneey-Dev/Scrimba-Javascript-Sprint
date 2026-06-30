let player = {
   name: "Teni",
   chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let sumEl = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")
let cardsEL = document.querySelector("#card-el")
let playerEL = document.querySelector("#player-el")

playerEL.textContent = player.name + ": $" + player.chips



function getRandomcard() {
let randomNumber = Math.floor(Math.random()* 13) + 1
 if (randomNumber === 1 ) {
   return 11
 } else if (randomNumber > 10){
   return 10
 } else {
   return randomNumber
 }
}




function startGame() {
   isAlive = true
   let firstCard = getRandomcard()
let secondCard = getRandomcard()
cards = [firstCard, secondCard]
 sum = firstCard + secondCard 
   renderGame()
}  


function renderGame () {
   cardsEL.textContent = "Cards: " 
   for (let i = 0; i < cards.length; i++) {
       cardsEL.textContent += cards[i] + " ";
   }



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
   isAlive =   false
}

messageEl.textContent = message
}
 


function newCard() { 
   if (isAlive === true && hasBlackJack === false) { 
   console.log("Drawing a new card from the deck")
let card = getRandomcard()
sum += card
cards.push(card)
renderGame()
   }
}
 