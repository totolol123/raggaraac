module.exports = {

  showNews: function (req, res) {

  	News.find({ limit: 5, sort: 'id DESC'}).exec(function(err, data) {

  		return res.view('home/homepage', {news: data, errors: req.flash('errors')});
  	});
  },
  showInfo: function (req, res) {

    News.findById(req.param('id')).populate('comments').exec(function(err, data) {

    	if(err || data.length === 0) {

    		return res.redirect('/');
    	}

    	return res.view('home/news', {info: data[0], success: req.flash('success'), errors: req.flash('errors')});
    });
  },
  processComment: function(req, res) {

    if(Date.now() > req.session.user.last_action + 60000) {

      Comments.create({

            created_by: req.session.user.name,
            comment: req.param('comment'),
            news: req.param('id')
        }).exec(function(err, data) {

            if(err) {

               return res.redirect('/');
            }

            req.session.user.last_action = Date.now();
            req.flash('success', 'Comment added');

            return res.redirect('/news/' + req.param('id'));
        });
      } else {

        req.flash('errors', 'Dont spam: ' + ((req.session.user.last_action + 60000 - Date.now()) / 1000));

        return res.redirect('/news/' + req.param('id'));
      }
    }
};
