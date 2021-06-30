const jwt=require('jsonwebtoken');
const config=require('../config')
//const { verify } = require("jsonwebtoken");

function verificarToken(req,res,next) {
    const token=req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            auth:false,
            mensaje:'Token no provisto'
        });
    }
    const decoded =jwt.verify(token,config.secret);
    req.userId=decoded.id;

    next();
    
}

module.exports = verificarToken;