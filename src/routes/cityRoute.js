const { Router } = require('express');
const StateController = require('../controllers/StateController');
const authentication = require("../middlewares/authentication");

const stateController = new StateController();

const router = Router();

router.get('/state', authentication, (req, res) => {
    stateController.getAll(req, res);
});

router.get('/state/:id', authentication, (req, res) => {
    stateController.getById(req, res)
});

router.post('/state', authentication, (req, res) => {
    stateController.create(req, res)
});

router.put('/state/:id', authentication, (req, res) => {
    stateController.update(req, res)
});

router.delete('/state/:id', authentication, (req, res) => {
    stateController.delete(req, res)
});

module.exports = router;