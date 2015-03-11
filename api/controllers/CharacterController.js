module.exports = {

   showCharacter: function(req, res) {

      return res.view('character/show', {info: req.query.player_data[0]});
   },
   searchCharacter: function(req, res) {

      Players.find({ name: { 'like': '%' + req.param('name') + '%' }}).exec(function(err, data) {

         if(err || data.length === 0) {

            req.flash('errors', 'No results were found');

            return res.redirect('/');
         }

         return res.view('character/search', {keywords: req.param('name'), results: data});
      });
   }
}
