const mongoose = require("mongoose");

function connect(){
mongoose
.connect("mongodb://localhost/fseletro", 
{useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(()=>{
    console.log("conectado")
})
.catch((error)=>{
    console.log(`Erro ao conectar ${error}`)
});   
}

module.exports = connect()