let nameEl = document.getElementById('name')
console.log('name')
nameEl.innerHTML = 'DisplayThis'
console.log(nameEl)
let name = prompt('What is your name?')
let score1 = prompt('Test Score 1:')
let score2 = prompt('Test Score 2')
let score3 = prompt('Test Score 3')

score1 = parseInt(score1, 10)
score2 = parseInt(score2, 10)
score3 = parseInt(score3, 10)

let average = (score1 + score2 + score3) / 3
console.log(`Hello, ${name}. Your average score is ${average}.`)
nameEl.innerHTML = (`Hello, ${name}. Your average score is ${average}.`)
//Students enter name, three individual test scores 0-100, one by one