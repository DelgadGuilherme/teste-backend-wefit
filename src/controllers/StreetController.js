const Controller = require('./Controller');
const StreetService = require('../services/StreetService');

const streetService = new StreetService();

class StreetController extends Controller {
    constructor() {
        super(streetService);
    }
}

module.exports = StreetController;