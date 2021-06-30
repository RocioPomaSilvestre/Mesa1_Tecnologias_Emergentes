const app=require('./app');
require('./database');
async function init(){
    await app.listen(5000);
    console.log('Servidor iniciado en http://localhost:5000')
}

init();