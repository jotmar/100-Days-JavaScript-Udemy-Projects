const imageStatus = document.querySelector('#imageStatus')
const infoStatus = document.querySelector('#infoStatus')
const imageList = ['images/nowifi.png', 'images/wifi.png']
const infoList = [
  'OOPS!!! Your Internet Connection is Down.',
  "You're ONLINE!!! Connection looks good."
]

/*window.addEventListener('load', e => {
  if (navigator.onLine) {
    imageStatus.src = imageList[1]
    infoStatus.innerHTML = infoList[1]
  } else {
    imageStatus.src = imageList[0]
    infoStatus.innerHTML = infoList[0]
  }
})
*/

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Arizona_%28BB39%29_Port_Bow%2C_Underway_-_NARA_-_5900075_-_1930.jpg/200px-Arizona_%28BB39%29_Port_Bow%2C_Underway_-_NARA_-_5900075_-_1930.jpg?time=' +
        new Date().getTime()
    )
    console.log(fetchResult)
    imageStatus.src = imageList[1]
    infoStatus.innerHTML = infoList[1]
    return fetchResult.status >= 200 && fetchResult.status < 300
  } catch (error) {
    console.log(error)
    imageStatus.src = imageList[0]
    infoStatus.innerHTML = infoList[0]
  }
}

window.addEventListener('load', connectionStatus)

setInterval(async () => {
  await connectionStatus()
}, 5000)
