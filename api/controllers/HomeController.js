module.exports = {

  showNews: function (req, res) {
  	
  	News.find({ limit: 5, sort: 'id DESC'}).exec(function(err, data) {

  		return res.view('home/homepage', {news: data});
  	});
  },
  showInfo: function (req, res) {

    News.findById(req.param('id')).populate('comments').exec(function(err, data) {

    	if(data.length === 0) {

    		return res.redirect('/');
    	}

    	return res.view('home/news', {info: data[0], success: req.flash('success'), errors: req.flash('errors')});
    });	
  },
  processComment: function(req, res) {

    if(Date.now() > req.session.last_action + 60000) {

      Comments.create({ 

            created_by: req.session.user,
            comment: req.param('comment'),
            news: req.param('id')
        }).exec(function(err, data) {

            if(err) {


            }

            req.session.last_action = Date.now();
            req.flash('success', 'Comment added');

            return res.redirect('/news/' + req.param('id'));
        });
      } else {

        req.flash('errors', 'Dont spam: ' + ((req.session.last_action + 60000 - Date.now()) / 1000));

        return res.redirect('/news/' + req.param('id'));
      }
    }
};