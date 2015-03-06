module.exports = function(req, res, next) {

   Accounts.findBySession(req.sessionID).exec(function(err, data) {

      if(data.length === 0) {

         return res.redirect('/logout');
      }

      Players.findByAccount_id(data[0].id).exec(function(error, players) {

         if(error) {

            return res.redirect('/logout');
         }

         if(players.length < sails.config.aac.characterLimit) {

            return next();
         }

         req.flash('errors', 'You cant create more characters');

         return res.redirect('/dashboard');
      });
   });
}
