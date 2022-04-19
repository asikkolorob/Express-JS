const express = require('express');
const handel = require('./handel');

const app = express();

app.set('view engine', 'ejs');

app.route('/about/event/sov')
    .get((req, res) => {
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send('Welcome to homepage with post');
    })
    .put((req, res) => {
        res.send('Welcome to homepage with put');
    })

// Handel Get Req, Res
app.listen(3000, () => {
    console.log(`Listen to 3000 Port`);
});