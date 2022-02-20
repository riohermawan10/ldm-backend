const express = require('express');
const router = express.Router();
const notController = require('../controllers/notefound');

router.get('/', notController.notfound);

module.exports = router;