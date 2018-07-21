import express from 'express'
const app = express()
app.set('views', 'src/views')
app.set('view engine', 'pug')

app.use(((req, res, next) => {
  res.render('index', { 'title': 'css animations' })
}))

app.listen(3000, () => console.log('listening on port 3000!'))