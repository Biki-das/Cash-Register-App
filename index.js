const billInput = document.querySelector('#Bill')
const cashInput = document.querySelector('#CashPaid')
const twoThousandDenominationText = document.querySelector("#Twothousandruppee-value")
const fiveHundredDenominationText = document.querySelector("#fivehundredruppee-value")
const oneHundredDenomninationText = document.querySelector("#onehundredruppee-value")
const twentyDenominationText = document.querySelector("#twentyruppee-value")
const tenDenominationText = document.querySelector("#tenruppee-value")
const fiveDenominationText = document.querySelector("#fiveruppee-value")
const oneDenominationText = document.querySelector('#oneruppee-value')
const btn = document.querySelector("#btn")
const billErrortext = document.querySelector("#bill-error")



let bill = 0;
let cashPaid = 0;
let changeAmt = 0;
let cash = [2000,500,100,20,10,5,1]
let denominationOfTwoThousandNotes = 0;
let denominationOfFiveHundredNotes = 0;
let denominationofHundredNotes = 0;
let denominationofTwentyNotes = 0;
let denominationofTenNotes = 0;
let denominationofFiveNotes = 0;
let denominationofOneNotes = 0;




billInput.addEventListener('input', (e) => {
  if(!Number.isNaN(parseInt(e.target.value))) {
  bill = parseInt(e.target.value)
  } 
})

cashInput.addEventListener('input', (e) => {
    if(!Number.isNaN(parseInt(e.target.value))) {
    cashPaid = parseInt(e.target.value)
    } 
})



btn.addEventListener("click", (e) => {
  e.preventDefault()
   if(cashPaid >= bill){
      changeAmt = cashPaid - bill
    billErrortext.style.display = "none"

   if(changeAmt >= 2000) {
  denominationOfTwoThousandNotes = Math.floor(changeAmt / cash[0])
  twoThousandDenominationText.textContent = denominationOfTwoThousandNotes
  } else{
  twoThousandDenominationText.textContent = 0
  }
 
  changeAmt = changeAmt - Math.floor(changeAmt / cash[0]) * cash[0]
 
  if(changeAmt >= 500){
 denominationOfFiveHundredNotes = Math.floor(changeAmt/ cash[1])
 fiveHundredDenominationText.textContent = denominationOfFiveHundredNotes
 }else{
  fiveHundredDenominationText.textContent = 0
 }
 
 changeAmt = changeAmt - Math.floor(changeAmt / cash[1]) * cash [1]
 
 if(changeAmt >= 200){
  denominationofHundredNotes = Math.floor(changeAmt/cash[2])
  oneHundredDenomninationText.textContent = denominationofHundredNotes
 }else{
  oneHundredDenomninationText.textContent = 0
 }
 
 changeAmt = changeAmt - Math.floor(changeAmt / cash[2]) * cash[2]
 
 
 if(changeAmt < 100 && changeAmt >= 20){
   denominationofTwentyNotes = Math.floor(changeAmt / cash[3])
   twentyDenominationText.textContent = denominationofTwentyNotes
 }else{
  twentyDenominationText.textContent = 0
 }
 
 
 if(changeAmt < 20 && changeAmt >= 10){
   denominationofTenNotes = Math.floor(changeAmt/ cash[4])
   tenDenominationText.textContent = denominationofTenNotes
 }else{
  tenDenominationText.textContent = 0
 }
 
 
 changeAmt = changeAmt - Math.floor(changeAmt / cash[4]) * cash[4]
 

 if(changeAmt < 10 && changeAmt >= 5){
   denominationofFiveNotes = Math.floor(changeAmt/ cash[5]) 
   fiveDenominationText.textContent = denominationofFiveNotes
 }
 else{
  fiveDenominationText.textContent = 0
 }
 
 
 changeAmt = changeAmt - Math.floor(changeAmt / cash[5]) * cash[5]
 
 denominationofOneNotes = changeAmt
 oneDenominationText.textContent = denominationofOneNotes
 

   }else{
    billErrortext.style.display = "block"
   }
})

