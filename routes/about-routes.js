module.exports = function(app){
    app.get('/about', function(req, res){
        res.render('about');
    });

    app.get('/', function(req, res){
        res.render('landing');
    });

    app.get('*', function(req, res){
        res.render('landing');
    });
};