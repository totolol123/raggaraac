module.exports = function(req, res, next) {

	if(req.session.authenticated) {

		return res.forbidden('You are already logged in.');
	}

	return next();
}