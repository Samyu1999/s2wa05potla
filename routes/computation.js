var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  var random = Math.random().toFixed(2);
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }

  res.render('computation', {
    title: 'Computation',
    value1: `Math.atan() applied to ` + x + ` is ${Math.atan(x,x).toFixed(2)}`,
    value2: `Math.exp() applied to ` + x + ` is ${Math.exp(x)}`,
    value3: `Math.expm1() applied to ` + x + ` is ${Math.expm1(x).toFixed(2)}`,
    
  });
});

module.exports = router;
