const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// ✅ 1. SEARCH route – PLACE THIS ABOVE ALL ROUTES WITH :id
router.get("/search", wrapAsync(async (req, res) => {
    const { q } = req.query;

    if (!q || q.trim() === "") {
        req.flash("error", "Please enter a search query.");
        return res.redirect("/listings");
    }

    const regexQuery = new RegExp(q, "i"); // case-insensitive

    const listings = await Listing.find({
  $or: [
    { title: regexQuery },
    { country: regexQuery },
    { location: regexQuery } 
  ]
});


    res.render("listings/index", { allListings: listings, q });
}));

// ✅ 2. INDEX + CREATE
router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// ✅ 3. NEW
router.get("/new", isLoggedIn, listingController.renderNewForm);

// ✅ 4. EDIT
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// ✅ 5. SHOW + UPDATE + DELETE
router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;
