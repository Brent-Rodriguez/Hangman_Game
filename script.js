const wordElement = document.getElementById('word')
const wrongLettersElement = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('figure-part')

// Array of words
const words = [
  'sony',
  'bird',
  'corona',
  'detox'
]

// Words Randomized
let randomWord = words[Math.floor(Math.random() * words.length)]

// Arrays
const correctLetters = ['s','o','n','y']
const wrongLetters = []

// Shows Hidden Word
const  diplayWord = () => {
  wordElement.innerHTML = `
    ${randomWord
      .split('')
      .map(letter => `
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''}
        </span>
      `).join('')
    }
  `
  const innerWord = wordElement.innerText.replace(/\n/g, '')
  if(innerWord === randomWord) {
    finalMessage.innerText = 'Congratulations! You won! '
    popup.style.display = 'flex'
  }
}

diplayWord()