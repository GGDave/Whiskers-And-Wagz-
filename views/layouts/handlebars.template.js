app.use(express.static('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: false,
    layoutsDir:'views'
}));
app.get('/static', (req, res) => {
    res.render('pets')
});

function fill_template() {
    var data = {
        title: "Whiskers And Wagz"
    }
}