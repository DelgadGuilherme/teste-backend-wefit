const Controller = require('./Controller');
const ProfileService = require('../services/ProfileService');

const profileService = new ProfileService();

class ProfileController extends Controller {
    constructor() {
        super(profileService);
    }
}

module.exports = ProfileController;