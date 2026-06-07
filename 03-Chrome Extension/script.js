
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

const ulEl = document.querySelector("#ul-el")

console.log(ulEl)

inputBtn.addEventListener ("click", function () {
   let inputText = inputEl.value

myLeads.push(inputText)
inputEl.value = ""
renderLeads()
}) 


let listItems = ""
function renderLeads() {
for (let i = 0; i < myLeads.length; i++) {
     listItems  += `<li>
     <a target ='_blank' href='${myLeads[i]}'>
     ${myLeads[i]}
     </a>
      </li>`
}
  ulEl.innerHTML = listItems  
}

