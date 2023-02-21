const wordInput = document.querySelector('.wordInput')
const checkButton = document.querySelector('.checkButton')
const container = document.querySelector('.container')
const result = document.querySelector('.result')

function reverseString(str) {
  let reversed = str.split('').reverse()
  reversed = reversed.join('')
  console.log(reversed)
  return reversed
}

checkButton.addEventListener('click', e => {
  if (
    wordInput.value.toLowerCase() ===
    reverseString(wordInput.value).toLowerCase()
  ) {
    container.style.backgroundColor = 'green'
    result.innerHTML = 'A Palindrome!'
  } else {
    container.style.backgroundColor = 'red'
    result.innerHTML = 'Not a Palindrome!'
  }
})
