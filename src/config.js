module.exports = {

    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/apicine',
    SECRET_KEY: 'mi_token',
    directory:__dirname

}