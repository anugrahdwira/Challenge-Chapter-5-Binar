const express = require('express');
const router = express.Router();

const rootController = require('./controllers/root');

router.get('/landing', rootController.landing);
router.get('/main', rootController.main);
router.get('/register', rootController.register);

module.exports = router;
