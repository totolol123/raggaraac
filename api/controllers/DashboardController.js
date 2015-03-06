module.exports = {

   showForm: function(req, res) {

      Accounts.findBySession(req.sessionID).exec(function(err, data) {

         if(data.length === 0) {

            return res.redirect('/logout');
         }

         Players.findByAccount_id(data[0].id).exec(function(error, players) {

            if(error) {

               return res.redirect('/logout');
            }

            return res.view('home/dashboard', {success: req.flash('success'), errors: req.flash('errors'), players: players});
         });
      });
   },
   logOut: function(req, res) {

      req.session.user = null;
      req.session.authenticated = null;
      req.flash('success', 'You are now logged out');

      return res.redirect('/login');
   },
   createCharacterForm: function(req, res) {

      return res.view('home/createchar', {errors: req.flash('errors')});
   },
   processCreateCharacter: function(req, res) {

      Accounts.findBySession(req.sessionID).exec(function(err, data) {

         if(data.length === 0) {

            return res.redirect('/logout');
         }

         Players.create({

            name: req.param('name'),
            account_id: data[0].id,
            level: 8,
            vocation: 2,
            health: 150,
            healthmax: 150,
            experience: 0,
            maglevel: 0,
            mana: 0,
            manamax: 0,
            town_id: 1,
            sex: 1,
            balance: 1000
         }).exec(function(err, players) {

            if(err) {

               req.flash('errors', 'Some fields are invalid');

               return res.redirect('/dashboard/create');
            }

            req.flash('success', 'Character ' + req.param('name') + ' created');

            return res.redirect('/dashboard')
         });
      });
   }
}
