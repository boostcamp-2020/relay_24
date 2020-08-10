const { show, create /*analysis*/ } = require("./chat_controller.js")
const router = require("express").Router();

router.get("/", show);
router.post("/", create);

module.exports = router;