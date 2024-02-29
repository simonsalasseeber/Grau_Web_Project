const app = require("./src/server");
const dbConfig = require('./src/config/dbConfig');
// const dotenv = require('dotenv');
// dotenv.config();
// const PORT = process.env.PORT || 3000;

const PORT = 3000;

dbConfig().then(() => { //si sale todo bien
    app.listen(PORT, () => {
        console.log(`Server listening in http://localhost:${PORT}`);
    }) // levanto el servidor
 // Add error event handler for the server
 app.on('error', (error) => {
    console.error('Server error:', error.message);
    process.exit(1); // Exit the process with an error code
});
}).catch(error => {
console.error('Database connection error:', error.message);
process.exit(1); // Exit the process with an error code
});
