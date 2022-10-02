const scan = require('../prisma/scan')
const { uid } = require('uid');

const getScans = async (req, res) => {
    const scans = await scan.getScans();
    res.json({success: true, scans})
}

const getScan = async (req, res) => {
    const scan = await require('../prisma/scan').getScanBy({id: +req.params.id})
    res.json({success: true, scan})
}

const addScan = async (req, res) => {
    const {format, image, text} = req.body
    const name = `${uid()}.${format}`
    require("fs").writeFile(`./images/${name}`, image, 'base64', function(err) {
        if (err)
            console.log("err", err);
    });
    const post = await scan.createScan({image: name, text})
    res.json({success: true, post})
}

const delScan = async (req, res) => {
    const scan = await require('../prisma/scan').deleteScan(+req.params.id) 
    res.json({success: true, scan})
}

module.exports = {
    getScans, addScan, getScan, delScan
}