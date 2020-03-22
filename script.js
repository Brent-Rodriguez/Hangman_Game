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
const correctLetters = []
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

// Update Wrong Letters Arr
const updateWrongLettersElement = () => {
  console.log('Update Wrong')
}

// Show Notification
const showNotification = () => {
  notification.classList.add('show')

  setTimeout(() => {
    notification.classList.remove('show')
  }, 2000)
}

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




diplayWord()