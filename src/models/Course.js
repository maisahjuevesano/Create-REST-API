const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    previousKnowledge: {
        type: String,

    },

    instructors: {
        type: [String],
        enum: ["Gabriel", "Linn", "Hernan", "Jeremy", "Linda", "Kevin", "Linnea", "Fredrica", "Sofia" ],

    },

    startDate: {
        type: String,
        required: true
    },

    endDate: {
        type: String,
        required: true

    }, 

    startTime: {

        type: String,
        required: true

    }, 

    endTime: {
        type: String,
        required: true

    }, 

    dayOfWeek: {

        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        // required: true

    },

    occasions: {
        type: Number
    },

    price: {

        type: Number
    },

    danceType: {

        type: String
    }, 

    level: {
        type: Number
    },

    term: {
        type: String
    }, 

    classLengthMins: {

        type: Number

    }, 

    couplesDance: {
        type: Boolean
    }, 

    maxParticipants: {
        type: Number
    },
    participant: {
           type: [{
        
            firstName: {    
                type:String,
                required: true,
        
            },
            lastName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            
            },
            partner: {
                firstName: {
                    type: String,
                },
                lastName: {
                    type:String,
                },
            },
            phoneNr: {
                type: String,
            },
            role: {
                enum: ["Leader", "Follower"]
            },
            discount: {
                enum: ["Student", "Several courses", "Couple", "Lady styling" ]
            },
        },
        ],

        default: []
    }

})



module.exports = mongoose.model('Course', CourseSchema)