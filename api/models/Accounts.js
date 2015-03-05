module.exports = {

	tableName: 'raggaer_aac_accounts',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {

		id: {

			primaryKey: true,
			unique: true,
			type: 'integer'
		},
		name: {

			required: true,
			unique: true,
			type: 'string',
			minLength: 4,
			maxLength: 30
		},
		password: {

			required: true,
			unique: true,
			type: 'string',
			minLength: 6,
			maxLength: 50
		},
		email: {

			required: true,
			unique: true,
			type: 'email',
			minLength: 3,
			maxLength: 255
		},
		points: {

			defaultsTo: 0,
			type: 'integer'
		}
	},
	loginAuth:  function(opts, cb) {

		var crypto = require('crypto');
		var shasum = crypto.createHash('sha1');

		shasum.update(opts.password);
		opts.password = shasum.digest('hex');

		Accounts.find({ where: { name: opts.name, password: opts.password }, limit: 1 }).exec(function(err, data) {

			cb(err, data);
		});
	},
	beforeCreate: function(attributes, next) {

		var crypto = require('crypto');
		var shasum = crypto.createHash('sha1');

		shasum.update(attributes.password);
		attributes.password = shasum.digest('hex');

		next();
	}
}