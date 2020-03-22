const wordElement = document.getElementById('word')
const wrongLettersElement = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('.figure-part')

// Hard Coded Array of words
const words = [
  'sony',
  'bird',
  'corona',
  'detox'
]

// Words Randomized
let randomWord = words[Math.floor(Math.random() * words.length)]

// Arrays
const correctLetters = []
const wrongLetters = []

// Shows Hidden Word
const  displayWord = () => {
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

// Update Wrong Letters
const updateWrongLettersElement = () => {
  // Display Wrong Letters
  wrongLettersElement.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display Hangmans Parts
  figureParts.forEach((parts, index) => {
    const errors = wrongLetters.length

    if(index < errors) {
      parts.style.display = 'block';
    } else {
      parts.style.display = 'none';
    }
  })

  // Check if Lost
  if(wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Sorry You Lost'
    popup.style.display = 'flex'
  }
}

// Show Notification
const showNotification = () => {
  notification.classList.add('show')

  setTimeout(() => {
    notification.classList.remove('show')
  }, 2000)
}

// Event Listners
// Keydown Letter Press
window.addEventListener('keydown', e => {
   if(e.keyCode >= 65 && e.keyCode <= 90) {
     const letter = e.key

     if(randomWord.includes(letter)) {
       if(!correctLetters.includes(letter)) {
         correctLetters.push(letter)

         displayWord()
       } else {
         showNotification()
       }
     } else {
       if(!wrongLetters.includes(letter)) {
         wrongLetters.push(letter)

         updateWrongLettersElement()
       } else {
         showNotification()
       }
     }
   }
}) 

// Restart Game
playAgainBtn.addEventListener('click', () => {
  // Clear Arr
  correctLetters.splice(0)
  wrongLetters.splice(0)

  randomWord = words[Math.floor(Math.random() * words.length)]

  displayWord()
  updateWrongLettersElement()

  popup.style.display = 'none'
})

displayWord()