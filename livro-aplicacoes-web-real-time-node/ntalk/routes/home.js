module.exports = function (app) {
    var home = app.controllers.home;//subjeto de app por causa do express-load
    app.get('/', home.index);
};