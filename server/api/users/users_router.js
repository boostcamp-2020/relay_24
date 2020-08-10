const { photoview } = require("./users_controller.js")
const router = require("express").Router();

router.get("/pic/:id", photoview)

module.exports = router;
