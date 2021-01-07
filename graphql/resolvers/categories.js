const db = require('../../db')
const Category = require('../../models/category')(db)

const getAllCategories = async (context) => {
    const categories = await Category.findAll()
    return categories
}
const createCategory = async (context, { input }) => {
    const { category } = input
    await Category.create([category])
    return {
        category
    }
}
const deleteCategory = async (context, { id }) => {
    await Category.remove(id)
    return true
}

const updateCategory = async (context, { id, input }) => {
    const { category } = input
    await Category.update(id, [category])
    return {
        category
    }
}
module.exports = {
    getAllCategories,
    deleteCategory,
    createCategory,
    updateCategory
}