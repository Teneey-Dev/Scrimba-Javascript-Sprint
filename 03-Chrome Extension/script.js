
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
let inputText = inputEl.value
const ulEl = document.querySelector("#ul-el")

console.log(ulEl)

inputBtn.addEventListener ("click", function () {

myLeads.push(inputText)
 console.log(myLeads)

})  

for (let i = 0; i < myLeads.length; i++) {
   ulEl.innerHTML += "<li>" +  myLeads[i] + " " + "</li>"
} 