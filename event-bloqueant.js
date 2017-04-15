const fs = require('fs')
let fileContent
const someMath = 1+1

try{
    fileContent = fs.readFileSync('big-file.txt', 'utf-8')
    console.log('file has been read')
}catch(err){
    console.log(err)
}


const text = `The sum is ${ someMath}`
console.log(text)