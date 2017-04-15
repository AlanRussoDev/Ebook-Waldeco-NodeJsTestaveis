const fs = require('fs')
const someMath = 1+1

fs.readFile('big-file.txt', 'utf-8', (err,content) =>{
    if(err){
        return console.log(err)
    }

    console.log(content)
})

const text = `The response is ${someMath}`
console.log(text)