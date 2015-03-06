module.exports = {

	showForm: function(req, res) {

		return res.view('login/form', {errors: req.flash('errors'), success: req.flash('success')});
	},
	processForm: function(req, res) {

		Accounts.loginAuth({ name: req.param('name'), password: req.param('password') }, function(err, data) {

			if(data.length === 0) {

				req.flash('errors', 'Wrong username or password');

				return res.redirect('/login');
			}

			req.session.authenticated = true;
			req.session.last_action = 0;
			req.session.user = data[0].name;
			req.flash('success', 'You are now logged in');

			return res.redirect('/dashboard');
		});
	}
}
