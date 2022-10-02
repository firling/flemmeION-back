const router = require("express").Router();


const { test } = require("../controllers/mainController");
router.get('/test', test);

module.exports = router;