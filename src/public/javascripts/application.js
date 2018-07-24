import express from 'express'
import path from 'path'
const app = express()
app.use(express.static(__dirname))
app.set('views', 'src/views')
app.set('view engine', 'pug')
// app.use(((req, res, next) => {
//   res.render('index', { 'title': 'css animations' })
// }))



app.get('/', (req, res) => {
  res.render('index', { 'title': 'css animations' })
})

app.listen(4000, () => console.log('listening on port 4000!', __dirname))
