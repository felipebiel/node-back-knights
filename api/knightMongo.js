module.exports = app => {

    const { existsOrError } = app.api.validator

    const Knight = app.mongodb.model('Knight', {
        name: String,
        nickname: String,
        birthday: String,
        keyAttribute: String,
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
        Knight.find({}, {}, {})
            .then(users => { 
                res.json(users) 
                console.log(users)
            })
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

        const newKnight = new Knight(knight)
        newKnight.save()
            .then(resp => res.json(resp))
            .catch(error => res.status(500).send(error))
    }

    return { Knight, get, save }
}