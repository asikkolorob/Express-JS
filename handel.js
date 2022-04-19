const handel = (req, res) => {
    console.log(req.app.locals.title);
    res.send('This is Home page with Get request');
}

module.exports = handel;