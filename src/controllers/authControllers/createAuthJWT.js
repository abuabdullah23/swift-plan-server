const generateToken = require("../../utils/generateToken");

exports.createAuthJWT = async (req, res) => {
    const user = req.body;
    // console.log(user);
    const token = generateToken(user);
    res.send({ token });
}