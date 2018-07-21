'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  res.render('index', { 'title': 'css animations' });
});

app.listen(3000, function () {
  return console.log('listening on port 3000!');
});