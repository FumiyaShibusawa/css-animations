import express from 'express'
const router = express.Router();

router.get('/my-grandfathers-clock', (req, res) => {
  res.render('my-grandfathers-clock', {
    'title': "My Grandfather's Clock"
  })
})

export default router