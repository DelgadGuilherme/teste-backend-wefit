const Services = require("./Services");
const StateService = require("./StateService");
const dataSource = require("../models");
const CityService = require("./CityService");
const StreetService = require("./StreetService");

const stateService = new StateService();
const cityService = new CityService();
const streetService = new StreetService();

class ProfileService extends Services {
    constructor() {
        super('Profile');
    }

    async create(data) {
        try {
            let state = await stateService.getByName(data.state_name);
            if (!state) {
                const stateData = {name: data.state_name};
                state = await stateService.create(stateData);
            }

            let city = await cityService.getByName(data.city_name);
            if (!city) {
                const cityData = {name: data.city_name, state_id: state.id};
                city = await cityService.create(cityData);
            }

            let street = await streetService.getByName(data.street_name);
            if (!street) {
                const streetData = {name: data.street_name, city_id: city.id};
                street = await streetService.create(streetData);
            }

            data.street_id = street.id;
            return dataSource[this.model].create(data);
        } catch (error) {
            throw new Error('Erro ao cadastrar perfil.');
        }
    }
}

module.exports = ProfileService;