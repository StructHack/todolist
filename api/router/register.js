const express = require('express');
const router = express.Router();
const mysql = require('mysql');

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


router.use(express.urlencoded({extended:false}))

router
	.route('/register')
	.get((req,res)=>{
		res.status(200).json({'error':'method not allowed.'});
	})
	.post((req,res)=>{
		let username = req.body.username
		let password = req.body.password
		


		let sql = "SELECT username FROM users where username=? limit 0,1"
		
		let query = db.query(sql, username,(err,result)=>{
			if(result.length > 0){

				res.status(200).json({'error':'username already exists.'})
			
			}else{
			
				let sql = "INSERT INTO users (username, password) VALUES ('?','?')"
				let query = db.query(sql,[username,password],()=>{
					res.status(202).send({'result':'success','message':'User registered'});
			
				})
			}
		})

	})




module.exports = router;