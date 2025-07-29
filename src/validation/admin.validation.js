const { body } = require("express-validator");

exports.register = [
    body('email')
]