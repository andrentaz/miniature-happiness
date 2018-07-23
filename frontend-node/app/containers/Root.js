// This is used to route between production and development env
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod');
} else {
    module.exports = require('./Root.dev');
}
