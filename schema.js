const joi = require("joi");

module.exports.listingSchema = joi.object({
  listing: joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    location: joi.string().required(),
    country: joi.string().required(),
    price: joi.string().required().min(0),
    image: joi.string().allow("", null),

    // ✅ ADD CATEGORY FIELD HERE
    category: joi.string().valid("Hotel", "PG", "Room", "Flat", "Colony").required()

  }).required(),
});
