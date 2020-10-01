const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const productRouter = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', productRouter);
app.use('/v1/auth/', authRoutes);
app.use('/v1/blog/', blogRoutes);

// Error
app.use((error, req, res, next) => {
    const status = error.errorStatus;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

mongoose.connect('mongodb+srv://Maulana:zLrrHKc1tr7O5weg@cluster0.xihip.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(() => {
    app.listen(4000, () => console.log('Connect Sucess'))
})
.catch(err => console.log(err));
