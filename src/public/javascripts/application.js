import express from 'express'
const app = express()
app.use(express.static(__dirname))
app.set('views', 'src/views')
app.set('view engine', 'pug')

import routes from '../routes'
import myGrandfathersClock from '../routes/my-grandfathers-clock'

app.use([routes, myGrandfathersClock]);

app.listen(4000, () => console.log('listening on port 4000!', __dirname))
