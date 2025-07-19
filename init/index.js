require('dotenv').config(); // Load .env

const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGO_URI;

main()
  .then(() => {
    console.log(" Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(" MongoDB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "68162421028cc6efa28398da",
  }));
  await Listing.insertMany(initdata.data);
  console.log(" Data was initialized");
  mongoose.connection.close(); // Close connection after seeding
};
