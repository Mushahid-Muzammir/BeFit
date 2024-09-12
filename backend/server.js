const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MongoDB', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successful');
});

const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/users', usersRouter);//If uri contains /users it will load usersRouter

app.listen(port , () => {
    console.log('Server is successfully running')  
});