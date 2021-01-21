const jwt = require('jsonwebtoken')


const secret = 'dadasdadsadafdf'

const token = jwt.sign({
    user: {
        id: 1,
        name: 'Felipe'
    }
}, secret, { expiresIn: 5 })

const test = () => {
    try {
        jwt.verify(token, secret)
        console.log('Valid signature!')
    } catch (err) {
        console.log('Invalid signature!')
    }
}

setInterval(test, 6000)