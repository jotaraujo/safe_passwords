// Selecionar os elementos no DOM
const generateButton = document.querySelector('#generate')
const passwordSection = document.querySelector('#password')

//Criar a função de letras maiúsculas
const upperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
//Criar a função de letras minúsculas
const lowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
//Criar a função de números
const numbers = () => {
  return Math.floor(Math.random() * 10)
}
//Criar a função de caracteres especiais
const symbols = () => {
  const symbols = '!@#$%^&*()_-+=[]{}/,.<>'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Criar função para gerar a senha
const generatePassword = (upperCase, lowerCase, numbers, symbols) => {
  let password = ""

  const generators = [
    upperCase,
    lowerCase,
    numbers,
    symbols
  ]

  for (let i = 0; i < generators.length; i = i + 4) {
    generators.forEach(() => {
      const randomValue = generators[Math.floor(Math.random() * generators.length)]
      password += generators[randomValue]
    })


    console.log(password)
  }
}
//Verificar o tamanho da senha inserida pelo usuário
//Verificar se deve incluir letras maiúsculas na senha
//Se sim, chamar a função de letras maiúsculas
//Verificar se deve incluir letras minúsculas na senha
//Se sim, chamar a função de letras minúsculas
//Verificar se deve incluir números na senha
//Se sim, chmar a função de números
//Verificar se deve incluir caracteres especiais na senha
//Se sim, chamar a função de caracteres especiais
//Criar uma variável para guardar a nova senha gerada


//Criar função para gerar os elementos da div password
const createPassword = (uppercase, lowercase, number, symbol) => {
  const password = [uppercase, lowercase, number, symbol]
  const title = document.createElement('h2')
  title.innerText = password

  passwordSection.append(title)
}
//Selecionar a div password
//Criar um h1 para a senha gerada chamando a função gerarSenha
//Criar um p para falar que a senha foi gerada com sucesso
//Criar um botão para copiar a senha

// Adicionar o evento de clique ao botão de gerar senha
generateButton.addEventListener('click', (e) => {
  e.preventDefault()

  generatePassword(upperCase(), lowerCase(), numbers(), symbols())
})