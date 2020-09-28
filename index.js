const express = require('express')

const app = express();

app.use(() => {
    console.log('Hello World');
    console.log('welcome to node js');
})

app.listen(4000)