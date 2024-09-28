const bodyValidateFields = (req, res, next) => {
    const { body } = req;
    const { name, cpf, email, confirm_email, postal_code, street_name, number, complement, city_name, neighborhood, state_name} = body;

    if (!body) {
        return res.status(400).json({ message: 'O body da requisicao nao foi passado.' });
    }

    if (!name || !cpf || !email || !confirm_email || !postal_code || !street_name || !number || !city_name || !neighborhood || !state_name) {
        return res.status(400).json({ message: 'Existem parâmetros obrigatórios que não foram enviados.', required_parameters: 'user_name, cpf, email, confirm_email, postal_code, street_name, number, city_name, neighborhood, state_name' });
    }

    if(email !== confirm_email) {
        return res.status(400).json({ message: 'Emails são diferentes' });
    }

    next();
}

module.exports = {
    bodyValidateFields
};
