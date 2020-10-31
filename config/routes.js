module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.getUsers)
    
    app.route('/knights')
        .get(app.api.knightMongo.get)
        .post(app.api.knightMongo.save)
        
    app.route('/knights/:id')
        .get(app.api.knightMongo.getById)
        .delete(app.api.knightMongo.remove)
}