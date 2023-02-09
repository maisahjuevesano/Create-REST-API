const express = require('express')
const router = express.Router()
const { getAllReviews,getReviewById,createReview,updateReview,deleteReview
} = require('../controller/reviewController')

router.get('/', getAllReviews)

router.get('/:reviewId', getReviewById)

router.post('/', createReview)

router.put('/:reviewId', updateReview)

router.delete('/:reviewId', deleteReview)

module.exports = router
