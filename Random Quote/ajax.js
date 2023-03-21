const genButton = document.querySelector('#genQuote')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

genButton.addEventListener('click', genQuote)

function genQuote() {
  var random = 10000
  xhttp = new XMLHttpRequest()
  xhttp.open('GET', 'https://type.fit/api/quotes', true)
  xhttp.send()
  xhttp.onload = function () {
    const quotes = JSON.parse(this.responseText)
    while (random > quotes.length) {
      random = Math.floor(Math.random() * 10000) - 1
    }
    console.log(random)
    console.log(quotes.length)
    quote.innerHTML = quotes[random].text
    author.innerHTML = quotes[random].author
  }
}
