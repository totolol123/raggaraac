module.exports = function(req, res, next) {

	if(req.session.authenticated) {

		req.flash('errors', 'You are already logged in');

		return res.redirect('/dashboard');
	}

	return next();
}
