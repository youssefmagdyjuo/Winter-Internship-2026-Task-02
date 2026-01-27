const jwt = require('jsonwebtoken');

const createToken = (userId,userRole) => {
    return jwt.sign(
        { id: userId, role:userRole },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    );
}
module.exports = { createToken };