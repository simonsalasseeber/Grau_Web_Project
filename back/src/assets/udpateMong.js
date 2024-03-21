const mongoose = require('mongoose');
const Admin = require('../models/Admin'); // Asegúrate de que esta ruta sea correcta

async function updateHashedPassword(username, newHashedPassword) {
    try {
        const updatedAdmin = await Admin.findOneAndUpdate(
            { username: username }, // Criterios de búsqueda
            { hashedPassword: newHashedPassword }, // Valores a actualizar
            { new: true } // Opción para devolver el documento actualizado
        );

        if (!updatedAdmin) {
            console.log('No se encontró el administrador para actualizar.');
            return;
        }

        console.log('Contraseña hash actualizada con éxito:', updatedAdmin);
    } catch (error) {
        console.error('Error al actualizar la contraseña hash:', error);
    }
}

module.exports = updateHashedPassword;