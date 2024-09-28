const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const authController = new AuthController();

const router = Router();

router.post('/auth/login', (req, res) => {
    authController.login(req, res);
});

module.exports = router;