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

const remove = async (req, res) => {
    await Category.remove(req.params.id)
    res.send({
        success: true
    })
}

const put = async (req, res) => {
    const { category } = req.body
    await Category.update(req.params.id, [category])
    res.send({
        success: true
    })
}
const getAll = async (req, res) => {
    const categories = await Category.findAll()
    res.send({
        categories
    })

}

module.exports = {
    create,
    remove,
    put,
    getAll
}