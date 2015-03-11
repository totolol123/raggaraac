module.exports = {

   showHighscores: function(req, res) {

      var type;
      var vocation;
      var type_name;
      var vocation_name;
      var query_type;

      switch(req.param('type')) {

         case 'level':
            type = 'level';
            type_name = 'Level';
            query_type = 'level';
            break;
         case 'magic':
            type = 'maglevel';
            type_name = 'Magic Level';
            query_type = 'magic';
            break;
         case 'fist':
            type = 'skill_fist';
            type_name = 'Fist Fighting';
            query_type = 'fist';
            break;
         case 'club':
            type = 'skill_club';
            type_name = 'Club Fighting';
            query_type = 'club';
            break;
         case 'sword':
            type = 'skill_sword';
            type_name = 'Sword Fighting';
            query_type = 'sword';
            break;
         case 'axe':
            type = 'skill_axe';
            type_name = 'Axe Fighting';
            query_type = 'axe';
            break;
         case 'dist':
            type = 'skill_dist';
            type_name = 'Distance Fighting';
            query_type = 'dist';
            break;
         case 'shield':
            type = 'skill_shielding';
            type_name = 'Shielding';
            query_type = 'shield';
            break;
         case 'fish':
            type = 'skill_fishing';
            type_name = 'Fishing';
            query_type = 'fish';
            break;
         default:
            type = 'level';
            query_type = 'level';
            type_name = 'Level';
            break;
      }

      switch(req.param('vocation')) {

         case 'sorcerer':
            vocation = 1;
            vocation_name = 'Sorcerer'
            break;
         case 'druid':
            vocation = 2;
            vocation_name = 'Druid'
            break;
         case 'paladin':
            vocation = 3;
            vocation_name = 'Paladin'
            break;
         case 'knight':
            vocation = 4;
            vocation_name = 'Knight'
            break;
         default:
            vocation = 1;
            vocation_name = 'Sorcerer'
      }

      Players.findByVocation(vocation).sort(type + ' desc').exec(function(err, data) {

         if(err || data.length === 0) {

            req.flash('errors', 'No players found');

            return res.redirect('/');
         }

         return res.view('community/highscores', { skill_nav: query_type, skill: type, type: type_name, vocation: vocation_name, players: data});
      });
   }
}
