module.exports = app => {
    const save = (request, response) => {
        response.send('USUARIO SALVO')
    }

    const getUsers = (request, response) => {
        response.send('GET USER')
    }

    return { save, getUsers }
}