const db = require('../db')
const Category = require('../models/category')(db)

const create = async (req, res) => {
    const { category } = req.body
    await Category.create([category])
    res.send({
        success: true,
        data: req.body
    })
}

module.exports = {
    create
}