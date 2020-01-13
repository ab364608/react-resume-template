const express = require('express');

const app = express();
app.use(express.json());

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})