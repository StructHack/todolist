const express = require('express');
const mongoose=require('mongoose');
const app = express();
const router = express.Router();
const dotenv = require('dotenv');
const cors = require('cors')


dotenv.config();


// Routes
const list = require('./routes/list');

//Connect to db
mongoose.connect("mongodb://localhost:27017/todolist",
 		{ useUnifiedTopology: true ,useNewUrlParser: true} ,
 		()=>{
	console.log('connected to db');
});

app.use(cors({
    origin: '*'
}));

//Middleware
app.use(express.json());

// Route Middlewares
app.use('/user',list)

app.listen(process.env.PORT,()=>{
	console.log(`listening on port ${process.env.PORT}`)
})