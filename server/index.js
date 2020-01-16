const express = require('express');

const app = express();
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})