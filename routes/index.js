var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('index');
});

router.get('/Resume.pdf', function(req, res, next) {
  res.sendFile('Resume.pdf', { root: path.join(__dirname, '../public/images') }); 
});

router.get('/headshot.jpg', function(req, res, next) {
  res.sendFile('headshot.jpg', { root: path.join(__dirname, '../public/images') }); 
});

router.get('/contact', function(req, res, next){
  res.render('contact');
})

router.all('/contact/submit', function(req, res, next){
  res.render('submit');
})

module.exports = router;
