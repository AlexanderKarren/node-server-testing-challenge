const jwt = require('jsonwebtoken');
const Users = require('../data/usersModel.js');
const { jwtSecret } = require('./secrets.js');

module.exports = (req, res, next) => {
    console.log(req.headers.authorization);
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, jwtSecret,
        (err, decoded) => {
            if (err) {
                res.status(401).json({ error: "Bad token"});
            }
            else {
                console.log(decoded);
                req.decoded = decoded;
                next();
            }
        })
    }
    else res.status(400).json({ error: "You need to log in to access this page" })
}