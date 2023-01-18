const billInput = document.querySelector('#Bill')
const cashInput = document.querySelector('#CashPaid')

let billValue = 0;
let cashValue = 0;



billInput.addEventListener('input', (e) => {
  if(!Number.isNaN(parseInt(e.target.value))) {
  billValue = parseInt(e.target.value)
  } 
  getValue()
})


cashInput.addEventListener('input', (e) => {
    if(!Number.isNaN(parseInt(e.target.value))) {
    cashValue = parseInt(e.target.value)
    } 
  getValue()
})

function getValue() {
    console.log(billValue)
    console.log(cashValue)
}