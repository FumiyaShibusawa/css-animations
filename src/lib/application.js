'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(__dirname));
app.set('views', 'src/views');
app.set('view engine', 'pug');
// app.use(((req, res, next) => {
//   res.render('index', { 'title': 'css animations' })
// }))


app.get('/', function (req, res) {
  res.render('index', { 'title': 'css animations' });
});

app.listen(3000, function () {
  return console.log('listening on port 3000!', __dirname);
});
