const mongoose = require('mongoose')

const BeachSchema = new mongoose.Schema(
	{
		beachName: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
		},
		description:{
			type: String,
			minLength: 3,
			maxLength: 100,
		
		},
		location: {
			type: String, 
			required: true,

		},

		totalrate: {
			type: Number,
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Beach', BeachSchema)
