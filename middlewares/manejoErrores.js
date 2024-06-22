export const manejadorErrores = (error, req, res, next) =>{
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Ha ocurrido un error inesperado!"

    console.error("\x1b[31m", `Error: (${statusCode}):`,error.stack)

    return res.status(statusCode).json({error: errorMessage})
}