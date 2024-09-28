const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll() {
        return dataSource[this.model].findAll();
    }

    async getById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async getByName(name) {
        return dataSource[this.model].findOne({
            where: {
                name: name
            }
        });
    }

    async create(data) {
        return dataSource[this.model].create(data, { returning: ['id'] });
    }

    async update(data, id) {
        const result = dataSource[this.model].update(data, {
            where: { id: id }
        });
        if (result[0] === 0) {
            return false;
        }
        return true;
    }

    async delete(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;