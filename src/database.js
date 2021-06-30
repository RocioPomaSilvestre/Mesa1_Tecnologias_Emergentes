const mongoose=require("mongoose");

mongoose.connect(
   //cx uri= "mongodb+srv://rocio:qwerty123@cluster0.ty18r.mongodb.net/examen3db?retryWrites=true&w=majority",
    uri= "mongodb+srv://rocio:qwerty123@cluster0.g6mfu.mongodb.net/mesa1_db?retryWrites=true&w=majority",
    
    options= { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("Se conecto  correctamenta aBase de Datos");
}).catch((e)=>{
    console.log("se produjo un error al conectar a la BD");
})

//const db = mongoose.connection;
//module.exports=db;
