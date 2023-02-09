const User = require('../models/User');

exports.getAllUsers= async (req, res, next) => {     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 
	return res.send("Get all users is ok!")
}

exports.getUserById = async (req, res, next) => { 
    //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

	return res.send("Id user successful!")
}

exports.createUser = async (req, res, next) => { 
//if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 201 created 

   return res.send("you are awesome user created!")
}

exports.updateUser = async (req, res, next) => {
    //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 
    return res.send("Success to update user!")
	
}

exports.deleteUser = async (req, res, next) => {
    //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 
    return res.send("Delete user yourself")
}
