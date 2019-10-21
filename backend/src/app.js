const express = require('express');

const morgan = require('morgan');

const cors = require('cors');

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));



module.exports = app;