const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // or your cloud storage config

router.post(
  '/',
  isLoggedIn, // your auth middleware
  upload.single('listing[image]'), // <--- this must match your form field name
  listings.createListing
);