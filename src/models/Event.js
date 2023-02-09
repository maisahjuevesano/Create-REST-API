const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
    },
    startDate: {
        type: String,
        required: true,

    },
    endDate: {
        type: String,
        required: true,
    },
    startTime: {
        type:String,
        required: true,

    },
    endTime: {
        type: String,
        required: true,
    },
    location: {
        venue:{
            type: String,
        },
        street: {
            type: String,
        },
        zipCode: {
            type: String,
        },
        city: {
            type: String,
        }
    },
    description: {
        type: String,
        required: true,
        minLength: 30,
        maxLength: 2000,
    }

})


module.exports = mongoose.model('Event', EventSchema)