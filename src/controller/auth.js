const { validationResult } = require("express-validator");

exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password

    // Error
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw(err)
    }

    const result = {
        message: 'Register Success',
        data:{
            id:1,
            name: name,
            email: email,
        }
    }

    res.status(201).json(result)
    next()
}