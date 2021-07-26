const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
	task:{
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	taskId:{
		type:String,
		required: true
	},
	time:{
		type: String,
		required: true,
	},
	now:{
		type:Number,
		required: true,
	},
	expire:{
		type: Boolean
	}
});



module.exports = mongoose.model('todolist', DatabaseSchema);