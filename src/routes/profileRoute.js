const { Router } = require('express');
const ProfileController = require('../controllers/ProfileController');
const authentication = require("../middlewares/authentication");

const profileController = new ProfileController();

const router = Router();

router.get('/profile', authentication, (req, res) => {
    profileController.getAll(req, res);
});

router.get('/profile/:id', authentication, (req, res) => {
    profileController.getById(req, res)
});

router.post('/profile', authentication, (req, res) => {
    profileController.create(req, res)
});

router.put('/profile/:id', authentication, (req, res) => {
    profileController.update(req, res)
});

router.delete('/profile/:id', authentication, (req, res) => {
    profileController.delete(req, res)
});

module.exports = router;