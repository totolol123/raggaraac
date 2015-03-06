module.exports = {

   tableName: 'accounts',
   autoCreatedAt: false,
	autoUpdatedAt: false,
   attributes: {

      id: {

         primaryKey: true,
         type: 'integer'
      },
      name: {

         type: 'string',
         unique: true,
         required: true
      },
      password: {

         type: 'string',
         required: true
      },
      type: {

         defaultsTo: 0,
         type: 'integer'
      },
      premdays: {

         defaultsTo: 0,
         type: 'integer'
      },
      email: {

         required: true,
         unique: true,
         type: 'email'
      },
      creation: {

         required: true,
         type: 'integer'
      },
      aac: {

         model: 'Accounts'
      }
   },
   beforeCreate: function(attributes, next) {

		var crypto = require('crypto');
		var shasum = crypto.createHash('sha1');

		shasum.update(attributes.password);
		attributes.password = shasum.digest('hex');

		next();
	}
}
