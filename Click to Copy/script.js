const coupon = document.querySelector('.coupon')
const copyButton = document.querySelector('.copyButton')

function copyText(e) {
  e.preventDefault()
  navigator.clipboard.writeText(coupon.value).then(() => {
    copyButton.innerHTML = 'Copied!'
    setTimeout(() => {
      copyButton.innerHTML = 'Copy'
    }, 3000)
  })
}

copyButton.addEventListener('click', copyText)
