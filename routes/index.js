var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const bullUrl = 'bull-ui';
  const mailRoute = 'send-mail';
  const notificationRoute = 'send-noti';
  res.render('index', { title: 'Express', bullUrl, mailRoute, notificationRoute });
});

module.exports = router;
