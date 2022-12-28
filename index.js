const express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const app = express()
const Validator = require('fastest-validator')

const Master = require('./db').default
const query = require('./queries')

app.use(express.json())

app.post('/login', function login(req, res) {
    const { username, pass } = req.body
    const user={
        id : 1,
        username: [username],
        pass: [pass]
    }
    jwt.sign(user, 'secret', {expiresIn:'3600s'}, (err, token)=>{
        if(err){
            console.log(err);
            res.sendStatus(304);
            return
        }
        Token = token
        res.json({
            user : user,
            token : Token
        });
    })
})

//Middleware sebelum memasuki route
app.use((req, res, next) => {
    const kode = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOlsiZmFyaGFuIl0sInBhc3MiOlsiZmFyaGFuIl0sImlhdCI6MTY3MDgxNzIzMywiZXhwIjoxNjcwODIwODMzfQ.Sknu9_xUBH3rRpVQbdMWTRhJglyEUdG9-KRyzg85PYs"
    jwt.verify(kode, 'secret', (err, data)=>{
        if(err){
            execute(login)
            console.log(err.message)
            res.json(err)
            return
        }
    })
    next()
})

app.get('/', async (req, res) => {
    // res.json({message: "Get index"})
    const master = await Master.findAll();
    return res.json(product);
    // pool.query(query.getBarang, (error, results) => {
    //     if(error) throw error;
    //     res.json(results.rows)
    // });
})

app.get('/:id', (req, res) => {
    pool.query(query.getBarangbyID, [id], (error, results) => {
        if(error) throw error;
        if(results.rowCount > 0){
            res.status(200).json(results.rows)
        }else{
            res.send("Data tidak ditemukan")
        }
    })
})

app.post('/', (req, res) => {
    // res.json({message: "Post index"})
    const {nama} = req.body
    res.json({message: nama})
    pool.query(query.addBarang, [nama], (error, results) => {
        if(error) throw error
        res.status(200).send("Data berhasil ditambahkan")
        console.log("Data ditambahkan")
    })
})

// function verifyUser(req, res, next){
//     const kode = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOlsiZmFyaGFuIl0sInBhc3MiOlsiZmFyaGFuIl0sImlhdCI6MTY3MDgxNzIzMywiZXhwIjoxNjcwODIwODMzfQ.Sknu9_xUBH3rRpVQbdMWTRhJglyEUdG9-KRyzg85PYs"
//     jwt.verify(kode, 'secret', (err, data)=>{
//         if(err){
//             console.log(err.message)
//             res.json(err)
//             return
//         }
//         req.body = data
//         next()
//     })
// }

app.listen(5000, () => {
    console.log("Aplikasi port 5000")
})