const Controller = require('./Controller');
const UserService = require('../services/UserService');

const userService = new UserService();

class UserController extends Controller {
    constructor() {
        super(userService);
    }
}

module.exports = UserController;