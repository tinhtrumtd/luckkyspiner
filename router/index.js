const newsRouter = require('./new')
function route(app){
    app.use('/new', newsRouter)
}
module.exports =route;