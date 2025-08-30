const generateButton = document.querySelector('#generate')
const passwordSection = document.querySelector('#password-section')
const uppercaseInput = document.querySelector('#uppercase')
const lowercaseInput = document.querySelector('#lowercase')
const numbersInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')

const upperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const lowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const numbers = () => {
  return Math.floor(Math.random() * 10)
}

const symbols = () => {
  const symbols = '!@#$%^&*()_-+=[]{}/.<>'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (upperCase, lowerCase, numbers, symbols) => {
  let password = ""

  const passwordLength = document.querySelector('#password_length').value

  const generators = []

  if (uppercaseInput.checked) generators.push(upperCase)
  if (lowercaseInput.checked) generators.push(lowerCase)
  if (numbersInput.checked) generators.push(numbers)
  if (symbolsInput.checked) generators.push(symbols)

  if (generators.length === 0) return

  for (let i = 0; i < passwordLength; i++) {
    const randomValue = generators[Math.floor(Math.random() * generators.length)]()
    password += randomValue
  }
  createPassword(password)
}

const createPassword = (data) => {
  passwordSection.innerHTML = ''
  const password = document.createElement('h2')
  password.classList.add('password')
  password.innerText = data

  const successMsg = document.createElement('p')
  successMsg.classList.add('success')
  successMsg.innerText = 'Password generated successfully!'

  const copyButton = document.createElement('button')
  copyButton.classList.add('copy')
  copyButton.innerText = 'Copy password'
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(password.innerText)
    copyButton.innerText = 'Password copied!'
  })

  passwordSection.style.display = 'block'
  passwordSection.append(successMsg, password, copyButton)
}

generateButton.addEventListener('click', (e) => {
  e.preventDefault()

  generatePassword(upperCase, lowerCase, numbers, symbols)
})