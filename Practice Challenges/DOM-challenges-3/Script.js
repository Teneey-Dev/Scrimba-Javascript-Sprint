let screenEL = document.getElementById("total-screen") 

let itemOne = 1500
let itemtwo = 3200

let total = itemOne + itemtwo

function totalChange() {
screenEL.textContent = "Total Due: " + total;
}