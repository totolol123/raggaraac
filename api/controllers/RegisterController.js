module.exports = {

	showForm: function(req, res) {

		return res.view('register/form', {errors: req.flash('errors')});
	},
	processForm: function(req, res) {

		Accounts.create({

			name: req.param('name'),
			password: req.param('password'),
			email: req.param('email')
		}).exec(function(err, data) {

			if(err) {

				if(err.ValidationError) {

					console.log(err.ValidationError)
					req.flash('errors', err.ValidationError);

					return res.redirect('/register');
				}
			}

			req.flash('success', 'Account created you can now log-in');

			return res.redirect('/login');
		});
	}
}