const genButton = document.querySelector('#genQuote')
// const quote = document.querySelector('.quote')
// const author = document.querySelector('.author')
const quoteNum = document.querySelector('#quoteNum')
const quoteLists = document.querySelector('#quoteLists')
const quoteList = document.createElement('div')
quoteList.className = 'quoteList'

genButton.addEventListener('click', genQuote)

function genQuote() {
  quoteLists.innerHTML = ''
  quoteList.innerHTML = ''
  const times = quoteNum.value
  xhttp = new XMLHttpRequest()
  xhttp.open('GET', 'https://type.fit/api/quotes', true)
  xhttp.send()
  xhttp.onload = function () {
    const quotes = JSON.parse(this.responseText)

    for (let i = 0; i < times; i++) {
      var random = 10000
      while (random > quotes.length) {
        random = Math.floor(Math.random() * 10000) - 1
      }

      const fullQuote = document.createElement('div')
      fullQuote.innerHTML = `<p class="quote">${quotes[random].text}</p><p class="author">${quotes[random].author}</p>`
      fullQuote.className = 'fullQuote'
      quoteList.appendChild(fullQuote)

      console.log(random)
      console.log(quotes.length)
      //quote.innerHTML = quotes[random].text
      //author.innerHTML = quotes[random].author
    }
    quoteLists.appendChild(quoteList)
  }
}
