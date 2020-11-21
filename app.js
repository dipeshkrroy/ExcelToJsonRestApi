const express = require('express');
const app = express();

const controller = require('./Api/Routes/controller');

/*app.use((req, res, next)=>{
    res.status(200).json({
        message:"it worked"
    });
});*/
app.use('/stocks', controller);
app.use('/stocks/:id', controller);

module.exports = app;