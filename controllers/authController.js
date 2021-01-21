const jwt = require('jsonwebtoken')
const secret = 'dadasdadsadafdf'
const USERS = {
    'Felipedmartins@123.com': 'abc123'

}

const auth = async (req, res) => {
    const { user, passwd } = req.body
    if (USERS[user] && USERS[user] === passwd) {
        const token = jwt.sign({
            user
        }, secret, { expiresIn: '2 days' })
        return res.send({
            success: true,
            token
        })
    }
    res.send({
        success: false,
        message: 'wrong credentials'
    })
}


module.exports = {
    auth
}