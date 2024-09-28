const { Router } = require('express');
const ProfileController = require('../controllers/ProfileController');

const profileController = new ProfileController();

const router = Router();

router.get('/profile', (req, res) => {
    profileController.getAll(req, res);
});

router.get('/profile/:id', (req, res) => {
    profileController.getById(req, res)
});

router.post('/profile', (req, res) => {
    profileController.create(req, res)
});

router.put('/profile/:id', (req, res) => {
    profileController.update(req, res)
});

router.delete('/profile/:id', (req, res) => {
    profileController.delete(req, res)
});

module.exports = router;