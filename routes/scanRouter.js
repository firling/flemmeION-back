const router = require("express").Router();

const { getScans, addScan } = require("../controllers/scanController");
router.get('/', getScans);
router.post('/create', addScan)

module.exports = router;