import config from '#config/config.js';
import jwt from 'jsonwebtoken';

const payload = {
    sub : "6888cbec5a6c8592c8e80817"
}

const token = jwt.sign(payload, config.appSecret, {
    expiresIn : "1d",
    issuer : "mern-starter"
})

console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODg4Y2JlYzVhNmM4NTkyYzhlODA4MTciLCJpYXQiOjE3NTY4MjQ0MjksImV4cCI6MTc1NjkxMDgyOSwiaXNzIjoibWVybi1zdGFydGVyIn0.xnnH4c8asAC_1lQ_HxlDP2gqKHe9FEFhNWd0yTANSpA