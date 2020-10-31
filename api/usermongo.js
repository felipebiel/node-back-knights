module.exports = app => {
    const User = app.mongodb.model('User', {
        id: Number,
        name: String
    })

    const get = (req, res) => {
        User.find({}, {}, {})
            .then(users => res.json(users))
    }

    return { User, get }
}