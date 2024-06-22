// Esta función toma un parámetro llamado valor y verifica si es verdadero (no es nulo, indefinido, falso, cero o una cadena vacía). Si valor es verdadero, crea un nuevo objeto de expresión regular utilizando valor como patrón y las banderas gi. Las banderas gi significan "global" y "ignorar caso", lo que significa que la expresión regular coincidirá con todas las ocurrencias del patrón en la cadena, y ignorará el caso al hacer la coincidencia. Si valor es falso, la función devuelve undefined.

export const formatearFiltrosDB = (valor) => valor ? new RegExp(valor, "gi") : undefined;

// La función toma un modelo como parámetro. Utiliza el modelo para encontrar el último documento en la colección, ordenado por el campo id en orden descendente. Si se encuentra un documento, devuelve el id del documento más uno. Si no se encuentra ningún documento, devuelve 1.

export const obtenerProximoId = async (modelo) => {
    const ultimoId =await modelo.findOne().sort("-id").exec();
    return ultimoId ? ultimoId.id +1 :1;
}