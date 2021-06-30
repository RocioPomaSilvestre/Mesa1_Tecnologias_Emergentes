const {Router}=require('express');
const usuarios = require('../models/usuarios');
const notas=require("../models/notas");
const router= Router();

const jwt=require('jsonwebtoken');
const config=require('../config');
const verificarToken=require('./verificarToken');

//LOGIN

router.post('/login', async(req,res,next)=>{
    const {USUARIO, CLAVE}=req.body;
    const usuario= await usuarios.findOne({USUARIO: USUARIO});

    if(!usuario){
        return res.status(404).send("No existe el usuario");
    }
    const claveValidada=  await usuario.validarClave(CLAVE);
    console.log(claveValidada);

    if(!claveValidada){
        res.status(401).json({auth:false,token:null});
    }
    const token=jwt.sign({id:usuario._id},config.secret,{
        expiresIn:60*60*24
    });

    res.json({auth: true, token});
})

//NOTAS
router.get('/notas', verificarToken, async(req,res,next)=>{
   
    notas.find({},(err,notas)=>{
        if(err)
        throw res.send(500).json({mensaje:"Error al acargar aplicacion listar"});
      
        console.log(notas);

        res.json(notas);
        //return res.render("listar",{notas2:notas.map(notas=>notas.toJSON())});
    });

    
})


//
router.post('/signup',(req,res,next)=>{
    const{NOMBRES, USUARIO, CLAVE}= req.body;
    //console.log(NOMBRES, USUARIO, CLAVE);
    const usuario=new usuarios({
        NOMBRES:NOMBRES,
        USUARIO:USUARIO,
        CLAVE:CLAVE
    });
    console.log(usuario);
    usuario.save();

    const token=jwt.sign({id:usuario._id},config.secret,{
        expiresIn:60*60*24
    })
    res.json({auth:true, token,token});
})
//
module.exports=router;