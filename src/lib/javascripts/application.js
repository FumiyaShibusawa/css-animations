'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _myGrandfathersClock = require('../routes/my-grandfathers-clock');

var _myGrandfathersClock2 = _interopRequireDefault(_myGrandfathersClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(__dirname));
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use([_routes2.default, _myGrandfathersClock2.default]);

app.listen(4000, function () {
  return console.log('listening on port 4000!', __dirname);
});