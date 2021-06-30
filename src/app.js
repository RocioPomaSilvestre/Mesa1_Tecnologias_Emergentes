const express=require("express");
const app=express();
//const db=require("./database");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./controllers/authController'));

module.exports=app;

/*
const engine=require("consolidate");
app.engine("hbs",engine.handlebars);
app.set("views","./views");
app.set("view engine","hbs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Bienvenido a la app");

});


const usuariosRouter = require("./routes/usuariosRouter")
app.use("/usuarios",usuariosRouter);

const notasRouter = require("./routes/notasRouter")
app.use("/notas",notasRouter);



app.listen(5000,()=>{
    console.log("Servidor iniciado en http://localhost:5000")
});
*/

