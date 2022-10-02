const scan = require('../prisma/scan')
const { uid } = require('uid')

const getScans = async (req, res) => {
    const scans = await scan.getScans();
    res.json({success: true, scans})
}

const addScan = async (req, res) => {
    const {format, image, text} = req.body
    const name = `${uid()}.${format}`
    require("fs").writeFile(`./images/${name}`, image, 'base64', function(err) {
        if (err)
            console.log("err", err);
    });
    await scan.createScan({image: name, text})
    res.json({success: true, name})
}

module.exports = {
    getScans, addScan
}