const Controller = require('./Controller');
const AuthService = require('../services/AuthService');

const authService = new AuthService();

class AuthController extends Controller {
    constructor() {
        super(authService);
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;

            const token = await authService.login(email, password);
            return res.status(200).json(token);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = AuthController;