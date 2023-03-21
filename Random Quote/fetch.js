const genButton = document.querySelector('#genQuote')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

genButton.addEventListener('click', genQuote)

function genQuote() {
  fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      quotes = data
      let random = 10000
      while (random > quotes.length) {
        random = Math.floor(Math.random() * 10000) - 1
      }
      console.log(random)
      console.log(quotes.length)
      quote.innerHTML = quotes[random].text
      author.innerHTML = quotes[random].author
    })
    .catch(function (err) {
      console.log(err)
    })
}
