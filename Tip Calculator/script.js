const billForm = document.querySelector('#iBill')
const rateForm = document.querySelector('#iRate')
const tipRes = document.querySelector('#tipAmount')
const billRes = document.querySelector('#billAmount')
const calculateButton = document.querySelector('#calculateButton')
const errorWarn = document.querySelector('.errorWarn')

calculateButton.addEventListener('click', e => {
  e.preventDefault()
  billValue = Number(billForm.value)
  console.log(billValue)
  rateValue = Number(rateForm.value)
  let tip = 0
  if (billValue == 0) {
    errorWarn.style.display = 'block'
    setTimeout(() => {
      errorWarn.style.display = 'none'
    }, 3000)
  } else {
    switch (rateValue) {
      case 1:
        tip = (billValue / 100) * 5
        break
      case 2:
        tip = (billValue / 100) * 10
        break
      case 3:
        tip = (billValue / 100) * 15
        break
      default:
        break
    }
    tip = Math.ceil(tip)
    const totalBill = billValue + tip
    tipRes.innerHTML = tip
    billRes.innerHTML = totalBill
  }
})
