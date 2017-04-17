import express from 'express'
import bodyParser from 'body-parser'


const logger = (req, res, next) =>{
    console.log('LOGGED')
    next()
}

const app = express()
app.use(bodyParser.json())
// app.use(logger)

app.get('/', (req, res) => res.send('Hello World'))

app.get('/products', (req, res) => res.send([{
        name : 'Default product',
        description : 'product description',
        price : 100
    }]))

export default app