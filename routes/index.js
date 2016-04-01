var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('colors');
});


router.get('/download', function(req, res, next){
	var file = req.query.file;
	res.setHeader('Content-disposition', 'attachment; filename=_colors.scss');
	res.setHeader('Content-type', 'text/plain');
	res.charset = 'UTF-8';
	res.write(file);
	res.end();
});

module.exports = router;
