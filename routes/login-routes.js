//Login Routes are not used in MVP Product, but we wanted to showcase
// that we will have login options for future development.


// const db = require('../models');

// module.exports = function(app){

//     // POST new user
//     app.post('/api/users', function(req, res){
//         db.Products.create(req.body).then(dbUser => res.json(dbUser));
//     });

//     // DELETE user
//     app.delete('/api/user/:id', function(req, res) {
//         db.Products.destroy({
//         where: {
//             id: req.params.id
//         }
//         }).then(dbUser => res.json(dbUser));
//     });

//     // UPDATE user info
//     app.put('/api/user', function(req, res) {
//         db.Products.update(
//         req.body,
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(dbUser => res.json(dbUser));
//     });

// };