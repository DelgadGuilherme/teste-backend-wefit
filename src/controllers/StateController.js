const Controller = require('./Controller');
const StateService = require('../services/StateService');

const stateService = new StateService();

class StateController extends Controller {
    constructor() {
        super(stateService);
    }
}

module.exports = StateController;