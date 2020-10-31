module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.getUsers)
    
    app.route('/test')
        .get(app.api.usermongo.get)
}