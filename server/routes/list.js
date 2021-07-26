const express = require('express');
const router = express.Router();
const Database = require('../model/Database')

router.post('/add',async (req, res)=>{
	const date = Date.parse(req.body.time.replace("T"," "));
	const data = new Database({
		task: req.body.task,
		taskId: req.body.taskId,
		time: date,
		now: new Date().getTime(),
		expire: false
	})

	try{

		const savedData = await data.save();
		res.send(savedData);

	}catch(error){
		res.status(400).json({status: "error", message: "Error occured updating the database"})
	}

	res.send(req.body.time);
})

router.post('/remove',async (req, res)=>{
	try{
		console.log(req.body.taskId.toString())
		const deleteData = await Database.deleteOne({taskId:req.body.taskId.toString()});
		res.send(deleteData);

	}catch(error){
		res.status(400).json({status: "error", message: "Error occured deleting the database"})
	}

	res.send(req.body);
})

router.get('/list', async (req, res)=>{
	const data = await Database.find();
	const newData = data.map(items=>{
		if((new Date().getTime()) > Number(items.time)){
			items.expire = true;
		}
		return items;
	})
	res.send(newData);
})





module.exports = router;