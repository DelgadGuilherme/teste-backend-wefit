const Controller = require('./Controller');
const CityService = require('../services/CityService');

const cityService = new CityService();

class CityController extends Controller {
    constructor() {
        super(cityService);
    }
}

module.exports = CityController;