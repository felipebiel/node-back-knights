module.exports = app => {

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
        res.json(req.body)
    }

    return { Knight, get, save }
}