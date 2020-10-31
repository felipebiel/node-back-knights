module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.getUsers)
    
    app.route('/knights')
        .get(app.api.usermongo.get)
}