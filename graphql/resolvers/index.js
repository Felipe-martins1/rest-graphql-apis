const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct } = require('./products')
const { getAllCategories, createCategory, deleteCategory, updateCategory } = require('./categories')
const { AuthenticationError } = require('apollo-server')

//HOF
const needsAuth = resolver => {
    return async (parent, args, context) => {
        if (!context.user) {
            throw new AuthenticationError('needs auth')
        }
        return resolver(parent, args, context)
    }
}

const resolvers = {
    Query: {
        getAllProducts: needsAuth(getAllProducts),
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