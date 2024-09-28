const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret.js');


module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Token nao informado')
    }

    const [, accessToken] = token.split(' ');

    try {
        verify(accessToken, jsonSecret.secretKey);

        const {id, email} = await decode(accessToken);

        req.user_id = id;
        req.user_email = email;

        return next();

    } catch (error) {
        return res.status(401).json('Usuario não autorizado');
    }
}