var routes = require('./routes');

// Routes
module.exports.setup = function( app ) {

    app.get('/', routes.index);

};