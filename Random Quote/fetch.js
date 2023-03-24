const genButton = document.querySelector('#genQuote')
// const quote = document.querySelector('#quote')
// const author = document.querySelector('#author')
const quoteNum = document.querySelector('#quoteNum')
const quoteLists = document.querySelector('#quoteLists')
const quoteList = document.createElement('div')
quoteList.className = 'quoteList'

genButton.addEventListener('click', genQuote)

function genQuote() {
  const times = quoteNum.value
  quoteLists.innerHTML = ''
  quoteList.innerHTML = ''

  fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      quotes = data
      for (let i = 0; i < times; i++) {
        let random = 10000
        while (random > quotes.length) {
          random = Math.floor(Math.random() * 10000) - 1
        }

        const fullQuote = document.createElement('div')
        fullQuote.className = 'fullQuote'
        fullQuote.innerHTML = `<p class='quote'>${quotes[random].text}</p><p class='author'>${quotes[random].author}</p>`
        quoteList.appendChild(fullQuote)

        console.log(random)
        console.log(quotes.length)
        // quote.innerHTML = quotes[random].text
        // author.innerHTML = quotes[random].author
      }
      quoteLists.appendChild(quoteList)
    })
    .catch(function (err) {
      console.log(err)
    })
}
