// routes/review.js
const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review  = require("../models/review");

const { isLoggedIn,
   validateReview,
   isReviewAuthor,
   } = require("../middleware.js");


const reviewController = require("../controllers/reviews.js");

// CREATE REVIEW -> POST /listings/:id/reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// DELETE REVIEW -> DELETE /listings/:id/reviews/:reviewId
router.delete("/:reviewId", isLoggedIn, wrapAsync(reviewController.destroyReview));

module.exports = router;
