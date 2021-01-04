const getAllProducts = () => [{ id: '1', name: 'AllProducts' }]

const createProduct = (context, { input }) => {
    const { id, name } = input
    console.log(id, name)
    return {
        id, name
    }
}

module.exports = {
    getAllProducts,
    createProduct
}