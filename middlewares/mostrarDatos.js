export const mostrarDatos = (req, res, next)=>{
    console.log('\x1b[32m',"metodo:", req.method);
    console.log('\x1b[32m',"url:", req.url);

    next()
}