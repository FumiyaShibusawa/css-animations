import express from 'express'
const app = express()

app.get('/views', (req, res) => {
  res.render('index', { 'title': 'css animations' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))