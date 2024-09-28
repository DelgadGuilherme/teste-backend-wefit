class Controller {
    constructor(serviceEntity) {
        this.serviceEntity = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const result = await this.serviceEntity.getAll();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

     async getById(req, res) {
        const { id } = req.params;
        try {
            const result = await this.serviceEntity.getById(Number(id));
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
     }

     async create(req, res) {
       try {
         const result = await this.serviceEntity.create(req.body);
         return res.status(200).json(result);
       } catch (error) {
           return res.status(500).json(error.message);
       }
     }

    async update(req, res) {
        const { id } = req.params;
        try {
            const result = await this.serviceEntity.update(req.body, Number(id));
            if (!result) {
                return res.status(400).json({ mensagem: `O Registro de id ${id} não foi atualizado` });
            }
            return res.status(200).json({ mensagem: `O Registro de id ${id} atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async upsert(req, res) {
        try {
            const result = await this.serviceEntity.upsert(req.body);
            if (!result) {
                return res.status(400).json({ mensagem: `O Registro não foi inserido/atualizado` });
            }
            return res.status(200).json({ mensagem: `O Registro foi inserido/atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.serviceEntity.delete(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        }  catch (error) {
            return res.status(500).json(error.message);
       }
    }
}

module.exports = Controller;