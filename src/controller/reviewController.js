const Review = require('../models/Review');

exports.getAllReviews = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 
	return res.send("Get all is successful!")
}

exports.getReviewById = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

	return res.send("Id review successful!")
}

exports.createReview = async (req, res, next) => { //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 201 created 

   return res.send("you are awesome!")
}

exports.updateReview = async (req, res, next) => { //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 201 created 
    return res.send("Success to update!")
	
}

exports.deleteReview = async (req, res, next) => { //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 201 created 
    return res.send("Delete yourself")
}
