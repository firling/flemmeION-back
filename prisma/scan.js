const prisma = require('./prisma')

const getScans = async () => {
    const scans = await prisma.scan.findMany()
    return scans
}

const getScanBy = async (data) => {
    const scan = await prisma.scan.findUnique({ where: data })
    return scan
}

const createScan = async (data) => {
    const post = await prisma.scan.create({data})
    return post
}

const deleteScan = async (id) => {
    const scan = await prisma.scan.delete({
        where: { id }
    })
    return scan
}

module.exports = {
    getScans, getScanBy, createScan, deleteScan
}