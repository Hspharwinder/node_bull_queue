const express = require('express');
const router = express.Router();
const controller = require('../controller/send-notification')

/* GET users listing. */
router.get('/', controller.sendNotification);

module.exports = router;
