const db = require('../api/db-config.js');

module.exports = {
    find,
    register
}

function find(filter) {
    if (filter) return db('users').where(filter);
    else return db('users');
}

function register(user) {
    return db('users').insert(user, 'id')
    .then(([id]) => {
        return find({ id });
    });
}