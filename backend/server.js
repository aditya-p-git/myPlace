const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
var cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware') 
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express ()

// cors
app.use(cors())

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));