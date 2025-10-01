

import express from 'express'
// import { request } from 'http'

const app = express ()
app.use(express.json())

const users = []



app.post('/usuarios', (req, res)=> {

    // console.log(req)
    users.push(req.body)

    res.status(201).json(req.body)

})



app.get('/usuarios', (req, res)=> {

    res.status(200).json(users)

})

app.listen(3306)

// app.post('/usuarios')
// app.put('/usuarios')
// app.delete('/usuarios')


/*
    1 = Tipo de Rota / Metodo http
    2 = Endereço
*/
