const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require('./routes/auths')

const PORT = process.env.PORT || 5000;
//config environment variable
dotenv.config()
//connect db
require('./database/dbConnection.js')()
// parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// refer to these routes for any authentication related stuffs.
app.use('/user/auth', authRoutes)









app.listen(PORT, ()=> console.log(`server is running on PORT ${PORT}`))