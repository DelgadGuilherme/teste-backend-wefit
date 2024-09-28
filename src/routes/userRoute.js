const { Router } = require('express');
const UserController = require('../controllers/UserController');
const authentication = require('../middlewares/authentication');

const userController = new UserController();

const router = Router();

router.get('/user', authentication, (req, res) => {
    userController.getAll(req, res);
});

router.get('/user/:id', authentication, (req, res) => {
    userController.getById(req, res)
});

router.post('/user', authentication, (req, res) => {
    userController.create(req, res)
});

router.put('/user/:id', authentication, (req, res) => {
    userController.update(req, res)
});

router.delete('/user/:id', authentication, (req, res) => {
    userController.delete(req, res)
});

module.exports = router;