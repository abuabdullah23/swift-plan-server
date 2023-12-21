const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authorization = req?.headers?.authorization;
    if (!authorization) {
        return res
            .status(401)
            .send({ error: true, message: 'Unauthorized No Token' })
    }
    const token = authorization.split(' ')[1]
    // console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) {
            return res
                .status(403)
                .send({ error: true, message: 'Unauthorized Access' })
        }
        req.decoded = decoded;
        next()
    })
}

module.exports = verifyJWT;
