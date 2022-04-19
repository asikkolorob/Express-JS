const express = require('express');
const handel = require('./handel');

const app = express();
const adminRoutes = express.Router();

adminRoutes.get('')


// Handel Req, Res
app.get('/user/:id', handel);

app.listen(3000, () => {
    console.log(`Listen to 3000 Port`);
});