exports.postData = (req, res, next) => {
    res.json(
        {
            message: 'This Works!!! POST',
            data: [
                {
                    id: 2,
                    name: 'Aca Maulana'
                }
            ]
        }
    )
    next();
}
exports.getData = (req, res, next) => {
    res.json(
        {
            message: 'This Works!!! GET',
            data: [
                {
                    id: 1,
                    name: 'Aca Maulana'
                }
            ]
        }
    )
    next();
}
exports.deleteData = (req, res, next) => {
    res.json(
        {
            message: 'This Works!!! GET',
            data: [
                {
                    id: 1,
                    name: 'Aca Maulana'
                }
            ]
        }
    )
    next();
}