const prisma = require('./prisma')

const getScans = async () => {
    const scans = await prisma.scan.findMany()
    return scans
}

const createScan = async (data) => {
    const post = await prisma.scan.create({data})
    return post
}


module.exports = {
    getScans, createScan
}