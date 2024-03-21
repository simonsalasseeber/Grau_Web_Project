const bcrypt = require('bcrypt');
const saltRounds = 10;


bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) {
        console.error('Error al generar la sal:', err);
        return;
    }

    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        if (err) {
            console.error('Error al hash la contraseña:', err);
            return;
        }

        // Suponiendo que 'admin' es el nombre de usuario del administrador
        //updateHashedPassword('admin', hash);
        console.log('Hash de la contraseña:', hash);
    });
});

