const imageStatus = document.querySelector('#imageStatus')
const infoStatus = document.querySelector('#infoStatus')
const imageList = ['images/nowifi.png', 'images/wifi.png']
const infoList = [
  'OOPS!!! Your Internet Connection is Down.',
  "You're ONLINE!!! Connection looks good."
]

window.addEventListener('load', e => {
  if (navigator.onLine) {
    imageStatus.src = imageList[1]
    infoStatus.innerHTML = infoList[1]
  } else {
    imageStatus.src = imageList[0]
    infoStatus.innerHTML = infoList[0]
  }
})
