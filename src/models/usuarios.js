const { compare } = require("bcryptjs");
const Mongoose  = require("mongoose");
const{Schema,model}=require('mongoose');

const bcrypt=require('bcryptjs');
const { response } = require("../app");

const usuariosSchema=new Mongoose.Schema({
    NOMBRES:{type:String},
    USUARIO:{type:String},
    CLAVE:{type:String},
    
   }
);

usuariosSchema.methods.encryptClave=async(CLAVE)=>{
   const salt= await bcrypt.genSalt(10);
};
usuariosSchema.methods.validarClave=function(CLAVE){
    console.log(CLAVE);
    console.log(this.CLAVE);
    
    if(CLAVE!=this.CLAVE){
        return false;
    }else{
    return true;
    }
};


module.exports=model("usuarios",usuariosSchema);

//module.exports=Mongoose.model("usuarios",usuariosSchema);
