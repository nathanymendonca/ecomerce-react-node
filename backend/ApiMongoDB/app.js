const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

app.use(express.json()); //usa em todos
app.use((req,res, next) => {  //next para continuar o processamento  //usa em todos
    res.header("Access-Control-Allow-Origin", "*");  // * qualquer site pode fazer a requisição
    res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers","X-PINGOTHER,Content-Type,Authorization");
    app.use(cors());
    next();
});   



require('./src/models/Comentario')
const Comentario = mongoose.model('comentario')

//conexao db
require('./src/bd/connect')

app.use(express.json())

app.get('/', async(req,res)=>{
    const comentarioResponse = await Comentario.find()
    const comentarioJson = await comentarioResponse

    return res.json(comentarioJson)
})

app.post('/comentario', async(req,res)=>{
    const novoComentario = new Comentario({
        nome:req.body.nome,
        msg:req.body.msg,
    })

    novoComentario.save()

    res.json({message:"Mensagem enviada com sucesso", comentario: novoComentario})
})
app.listen(4333)