 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js"
 import { getDatabase,
          ref,
          push,
          onValue,
          remove} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js"
import config from "./config.js";

 const firebaseConfig = {
  databaseURL: config.DATABASE_URL
 }  

 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app)
const referenceInDB = ref(database, "leads")


 console.log(firebaseConfig.databaseURL)


const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
 const deleteBtn = document.querySelector("#delete-btn")





function render(leads) {
let listItems = ""
for (let i = 0; i < leads.length; i++) {
     listItems  += `<li>
     <a target ='_blank' href='${leads[i]}'>
     ${leads[i]}
     </a>
      </li>`
}
  ulEl.innerHTML = listItems  
}

onValue(referenceInDB, function(snapshot) {
  const snapshotExists = snapshot.exists() 
  if(snapshotExists) {
const snapshotValues = snapshot.val()
const leads = Object.values(snapshotValues)
 render (leads );
  }
})

deleteBtn.addEventListener("dblclick", function() { 
remove(referenceInDB)
ulEl.innerHTML = ""
} )

inputBtn.addEventListener ("click", function () {
push(referenceInDB, inputEl.value)
inputEl.value = "" 

}) 



