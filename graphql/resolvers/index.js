const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct } = require('./products')
const { getAllCategories, createCategory, deleteCategory, updateCategory } = require('./categories')
const resolvers = {
    Query: {
        getAllProducts,
        getAllCategories
    },
    Mutation: {
        createProduct,
        deleteProduct,
        updateProduct,
        createImageOnProduct,
        deleteImageOnProduct,
        createCategory,
        deleteCategory,
        updateCategory
    }

}

module.exports = resolvers