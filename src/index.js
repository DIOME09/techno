import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRouters from './routes/index.js'


const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'public/img')))

app.use(indexRouters)

app.listen(3000)
console.log('App running in port:', 3000)