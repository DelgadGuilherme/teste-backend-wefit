const { Router } = require('express');
const StreetController = require('../controllers/StreetController');
const authentication = require("../middlewares/authentication");

const streetController = new StreetController();

const router = Router();

router.get('/street', authentication, (req, res) => {
    streetController.getAll(req, res);
});

router.get('/street/:id', authentication, (req, res) => {
    streetController.getById(req, res)
});

router.post('/street', authentication, (req, res) => {
    streetController.create(req, res)
});

router.put('/street/:id', authentication, (req, res) => {
    streetController.update(req, res)
});

router.delete('/street/:id', authentication, (req, res) => {
    streetController.delete(req, res)
});

module.exports = router;