const { validationResult } = require("express-validator");

// mehtod POST
exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    // const image = req.body.image,

    // get date
    const date = new Date();
    const create_at = `${date.getDate()} ${date.toLocaleString('default', {month:'long'})} ${date.getFullYear()}`;

    // Error
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw(err);
    }

    const result = {
        message: 'Create Post Success',
        data: {
            title: title,
            image: 'thumb.png',
            body: body,
            create_at: create_at,
            author: {
                uid: 1,
                name: 'Aca M'
            }
        }
    }

    res.status(201).json(result)
    next();
}