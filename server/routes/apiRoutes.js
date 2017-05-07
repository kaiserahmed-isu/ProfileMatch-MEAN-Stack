var express = require("express"),
    router = express.Router();

router.use("/user", require("../controllers/profile.api.js"));

module.exports = router;