module.exports = app => {

    const { existsOrError, notExistsOrError } = app.api.validator

    const Knight = app.mongodb.model('Knight', {
        name: String,
        nickname: String,
        birthday: String,
        keyAttribute: String,
        deletedAt: String,
        weapons: [
                {
                    name: String,
                    mod: Number,
                    attr: String,
                    equipped: Boolean
                }
        ],
        attributes: {
                strength: Number,
                dexterity: Number,
                constitution: Number,
                intelligence: Number,
                wisdom: Number,
                charisma: Number,
        },
            
    })

    const get = (req, res) => {
        const filter = req.query.filter ? { deletedAt: {$ne: ""} } : { deletedAt: "" }
        Knight.find(filter, {}, {})
            .then(users => { 
                res.json(users) 
            })
    }

    const getById = (req, res) => {
        Knight.findById(req.params.id)
            .then(knight => { 
                res.json(knight) 
            })
            .catch(() => res.status(500).send('Guerreiro não encontrado'))
    }

    const remove = async (req, res) => {
        //USANDO O SOFTDELETE
        Knight.findByIdAndUpdate(req.params.id, {deletedAt: new Date()}, {})
            .then(() => {
                res.status(201).send('Guerreiro apagado')
            })
            .catch(() => res.status(500).send('Erro ao apagar'))

        // DELETANDO DE FATO
        // Knight.findById(req.params.id)
        //     .then(knight => { 
        //         Knight.deleteOne({ _id: knight._id })
        //             .then(() => res.status(201).send('Guerreiro apagado'))
        //             .catch(() => res.status(500).send('Erro ao apagar'))
        //     })
        //     .catch(() => res.status(500).send('Guerreiro não encontrado'))
    }

    const partialUpdate = async (req, res) => {
        const knight = {...req.body}
        try {
            existsOrError(knight.nickname, 'Apelido não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        Knight.findByIdAndUpdate(req.params.id, knight, {})
            .then(() => {
                res.status(201).send('Guerreiro alterado')
            })
            .catch(() => res.status(500).send('Erro ao apagar'))
    }

    const save = (req, res) => {
        const knight = {...req.body}
        try {
            existsOrError(knight.name, 'Nome não informado')
            existsOrError(knight.nickname, 'Apelido não informado')
            existsOrError(knight.birthday, 'Idade não informada')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        const newKnight = new Knight({...knight, deletedAt: ""})
        newKnight.save()
            .then(resp => res.json(resp))
            .catch(error => res.status(500).send(error))
    }

    return { Knight, get, save, getById, remove, partialUpdate }
}