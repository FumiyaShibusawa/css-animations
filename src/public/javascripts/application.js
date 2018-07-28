import express from 'express'
const app = express()
app.use(express.static(__dirname))
app.set('views', 'src/views')
app.set('view engine', 'pug')

import * as myGrandfathersClock from '../routes/my-grandfathers-clock'

app.get('/', (req, res) => {
  res.render('index', { 'title': 'css animations' })
})

app.use('/my-grandfathers-clock', myGrandfathersClock);

app.listen(4000, () => console.log('listening on port 4000!', __dirname))
