module.exports = function(app){
    app.get('/about', function(req, res){
        res.render('about');
    });

    app.get('/', function(req, res){
        res.render('landing');
    });

    app.get('/order', function(req, res){
        res.render('order');
    });

    app.get('/signup/thankyou', function(req, res){
        res.render('thanks');
    });

    app.get('*', function(req, res){
        res.render('landing');
    });
};