const Mongoose  = require("mongoose");

const notasSchema=new Mongoose.Schema({
    MATERIA:{type:String},
    NOTA:{type:String},
   }
);

module.exports=Mongoose.model("notas",notasSchema);
