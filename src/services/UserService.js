const Services = require("./Services");
const dataSource = require("../models");
const { hash } = require('bcryptjs');
const uuid = require('uuid')

class StateService extends Services {
    constructor() {
        super('User');
    }

    async create(data) {

        const user = await dataSource[this.model].findOne({
            where: {
                email: data.email
            }
        });

        if (user) {
            throw new Error('Usuario ja cadastrado.');
        }

        try {

            data.password = await hash(data.password, 8);
            data.id = uuid.v4();

            return dataSource[this.model].create(data);
        } catch (error) {
            throw new Error('Erro ao cadastrar usuario.');
        }
    }
}

module.exports = StateService;