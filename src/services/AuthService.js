const Services = require("./Services");
const dataSource = require("../models");
const { compare } = require('bcryptjs');
const { sign } = require("jsonwebtoken");
const jsonSecret = require("../config/jsonSecret");

class AuthService extends Services {
    constructor() {
        super('User');
    }

    async login(email, password) {
        const user = await dataSource[this.model].findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                email: email
            }
        });

        console.log(user)

        if (!user) {
            throw new Error('Usuario Não encontrado!');
        }

        const valid = await compare(password, user.password);

        if (!valid) {
            throw new Error('Senha ou usuario invalido!');
        }

        const token = sign({
            id: user.id,
            email: user.email
        }, jsonSecret.secretKey, {
            expiresIn: '5d'
        });

        return { token };

    }
}

module.exports = AuthService;