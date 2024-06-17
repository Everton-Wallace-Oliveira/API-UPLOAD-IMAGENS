const express =  require("express");
const router = express.Router();

const PictureController = require("../controllers/pictureController")
const upload = require("../config/multer");

router.post("/", upload.single("file"), PictureController.create);

module.exports = router;