module.exports = function(req, res, next) {

   Players.findByName(req.param('name')).limit(1).exec(function(err, data) {

      if(err || data.length === 0) {

         req.flash('errors', 'Character not found');

         return res.redirect('/');
      }

      req.query.player_data = data;
      next();
   });
}
