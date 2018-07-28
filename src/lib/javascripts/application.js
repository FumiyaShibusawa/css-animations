'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _myGrandfathersClock = require('../routes/my-grandfathers-clock');

var myGrandfathersClock = _interopRequireWildcard(_myGrandfathersClock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(__dirname));
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { 'title': 'css animations' });
});

app.use('/my-grandfathers-clock', myGrandfathersClock);

app.listen(4000, function () {
  return console.log('listening on port 4000!', __dirname);
});