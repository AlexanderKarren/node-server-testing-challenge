const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authenticator = require('./authenticator.js')

const userRouter = require('./userRouter.js')
const credentialsRouter = require('./credentialsRouter.js')

const server = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
}

server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));

server.use('/api', credentialsRouter);
server.use('/api/users', authenticator, userRouter);


server.get('/', (req, res) => {
    res.send(`<h1>It's up</h1>`)
})

module.exports = server;