const express = require('express')
const router = express.Router()
const { getAllBeaches,getBeachById,createNewBeach,updateBeachById,deleteBeachById
} = require('../controller/beachController')

router.get('/', getAllBeaches)

router.get('/:beachId', getBeachById)

router.post('/', createNewBeach)

router.put('/:beachId', updateBeachById)

router.delete('/:beachId', deleteBeachById)

module.exports = router
