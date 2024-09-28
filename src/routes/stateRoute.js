const { Router } = require('express');
const CityController = require('../controllers/CityController');
const authentication = require("../middlewares/authentication");

const cityeController = new CityController();

const router = Router();

router.get('/city', authentication, (req, res) => {
    cityeController.getAll(req, res);
});

router.get('/city/:id', authentication, (req, res) => {
    cityeController.getById(req, res)
});

router.post('/city', authentication, (req, res) => {
    cityeController.create(req, res)
});

router.put('/city/:id', authentication, (req, res) => {
    cityeController.update(req, res)
});

router.delete('/city/:id', authentication, (req, res) => {
    cityeController.delete(req, res)
});

module.exports = router;