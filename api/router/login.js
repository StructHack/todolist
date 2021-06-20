const express = require('express');
const mysql = require('mysql');

const router = express.Router()

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node_db'
});

db.connect((err)=>{
	if(err){
		throw err;
	}
	console.log('MySQL connected');
});

router.use(express.urlencoded({extended:false}));

router.get('/',(req, res)=>{
	res.status(200).json({'error':'method not allowed.'});
}).post('/',(req,res)=>{

	let username = req.body.username;
	let password = req.body.password;

	let sql = "SELECT username FROM users WHERE username=? AND password=? limit 0,1";

	let query = db.query(sql, [username,password],(err, result)=>{
		if(result.length > 0){
			res.status(200).json({'result':'success', 'message':'Logged in'})
		}else{
			res.status(200).json({'result':'fail','message':'Username or password wrong.'})
		}
	})
})








module.exports=router;
