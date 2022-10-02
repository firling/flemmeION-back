const router = require("express").Router();

const { getScans, addScan, getScan, delScan } = require("../controllers/scanController");
router.get('/', getScans);
router.get('/:id', getScan);
router.post('/create', addScan);
router.delete('/delete/:id', delScan)

module.exports = router;