const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
		},

		email:{
			type: String,
			unique: true, 
			required: true,
		},
		adress:{
			type: String, 
		},
		city: {
			type: String, 
		},
		zipcode: {
			type: String, 
		},
		sex: {
			type: String,
			enum: ['female', 'male', 'non-binary']
		},
		password: {
			type: String,
			required: true,
		},



	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', UserSchema)
