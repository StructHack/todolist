const express = require('express');

const app = express();
const router = express.Router();

const register = require('./router/register');
const login = require('./router/login');

app.use('/login', [register, login])


app.listen(5000,()=>{
	console.log('Listening on port 5000');
})
