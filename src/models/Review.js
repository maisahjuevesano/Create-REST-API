const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
	{
		recension: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 500,
		},
		rate: {
			type: Number,
			min:1,
			max: 5,

		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
				},

		beach: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Beach',

		}

	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Review', ReviewSchema)
