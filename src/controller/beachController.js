const { response } = require('express');
const Beach = require('../models/Beach');



exports.getAllBeaches = async (req, res, next) => {

 //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 200 

	return res.send("Get all is successful!")
}

exports.getBeachById = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 200 
    



	return res.send("hej get Id silly")
}

exports.createNewBeach = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data response.sendstatus(404)

//success 
// 201 created 

   return res.send("created new beach")
}

exports.updateBeachById = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 200 
    return res.send("U have been updated")
	
}

exports.deleteBeachById = async (req, res, next) => {
     //if wrong endpoint throw error 404
 //if (!admin) return response.sendStatus(403)
 //if server crash return response.sendStatus(500)
//  if internet dies return response.sendStatus(12163)
// if not found return response.sendstatus(404)
//if user write wrong data 

//success 
// 200 
    return res.send("U have been deleted from earth")
}
