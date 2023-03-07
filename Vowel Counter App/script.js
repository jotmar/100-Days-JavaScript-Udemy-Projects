const textInput = document.querySelector('.textInput')
const checkButton = document.querySelector('.checkButton')
const result = document.querySelector('.result')

checkButton.addEventListener('click', e => {
  let string = textInput.value
  stringArray = Array.from(string)
  let vowels = stringArray.filter(
    x => ['a', 'e', 'i', 'o', 'u'].indexOf(x.toLowerCase()) > -1
  )
  console.log(vowels)
  if (vowels.length > 0) {
    result.textContent = `${string} has ${vowels.length} vowels`
  } else {
    result.textContent = `${string} doesn't have any vowels`
  }
})
