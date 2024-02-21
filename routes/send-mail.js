const express = require('express');
const router = express.Router();
const controller = require('../controller/send-mail')

/* GET users listing. */
router.get('/', controller.sendMail);

module.exports = router;
