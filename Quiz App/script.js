const questions = {
  'Best Programming Language?': ['Python', 'JavaScript', 'Ruby', 'C', 0],
  'Best Operational System?': ['Linux', 'Windows', 'Kali', 'Zorin OS', 3],
  'Richest?': ['Warren', 'Elon', 'Dava', 'Zibilu', 1]
}

const choices = document.querySelectorAll('.choice')
const question = document.querySelector('#question')
const buttons = document.querySelectorAll('button')
const questionMarker = document.querySelector('#questionMarker')
const timerDiv = document.querySelector('#timer')
const indexSpan = document.querySelector('.indexSpan')
const maxIndex = document.querySelectorAll('.maxIndex')
const mainQuiz = document.querySelector('#quiz')
const remakeQuiz = document.querySelector('#quizRepeat')
const scoreSpan = document.querySelector('.scoreSpan')
const remakeButton = document.querySelector('#remakeButton')

class Quiz {
  constructor(buttons, choices, questions) {
    this.buttons = buttons
    this.questions = questions
    this.choices = choices
    this.score = 0
    this.index = 0
    this.length = Object.keys(questions).length
    this.remake = false
    this.Interval = 0
  }

  timer() {
    if (this.Interval != 0) {
      clearInterval(this.Interval)
    }
    timerDiv.innerHTML = 60
    this.Interval = setInterval(() => {
      timerDiv.innerHTML = Number(timerDiv.innerHTML) - 1
      if (Number(timerDiv.innerHTML) == 0) {
        this.end()
      }
    }, 1000)
  }

  addCheckers() {
    if (!this.remake) {
      for (let i = 0; i < 4; i++) {
        this.buttons[i].addEventListener('click', () => {
          if (this.index + 2 > this.length) {
            this.end()
          }
          if (i == Object.values(this.questions)[this.index][4]) {
            this.score++
          }
          this.index++
          this.remake = true
          this.placeQuestions()
        })
      }
    }
  }

  updateIndex() {
    indexSpan.innerHTML = this.index + 1
    maxIndex[0].innerHTML = this.length
    scoreSpan.innerHTML = this.score
    maxIndex[1].innerHTML = this.length
  }

  placeQuestions() {
    this.timer()
    this.updateIndex()
    question.innerHTML = Object.keys(questions)[this.index]
    for (let i = 0; i < 4; i++) {
      this.choices[i].innerHTML = Object.values(this.questions)[this.index][i]
    }
  }

  end() {
    remakeQuiz.style.display = 'block'
    mainQuiz.style.display = 'none'
  }

  startQuiz() {
    remakeButton.addEventListener('click', () => {
      this.index = 0
      this.score = 0
      this.startQuiz()
      remakeQuiz.style.display = 'none'
      mainQuiz.style.display = 'block'
    })
    this.addCheckers()
    this.placeQuestions()
  }
}

const quiz = new Quiz(buttons, choices, questions)
quiz.startQuiz()
