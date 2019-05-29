const fs = require('fs');
const readline = require('readline');

let jobName, coName;

// const text = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFileSync('./cv/default.txt', 'utf8')
//     resolve()
//   })
// };



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Company name: ', (answer) => {
      coName = answer
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Job title: ', (answer) => {
      jobName = answer
      resolve()
    })
  })
}



const main = async () => {
  // await defaultText()
  await question1()
  await question2()
  await console.log(`you apply ${jobName} at ${coName}`)
  rl.close()
}


const arr = ['company name', 'job title']
let i = 0
let answers = []

function hihi() {

  rl.question(arr[i], (answer) => {
    answers[i] = answer
    i++
    hihi()
  })
  // if(i === 1) 
  console.log(answers)
  if(i === 2) rl.close()
}

hihi()