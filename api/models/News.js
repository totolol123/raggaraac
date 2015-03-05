module.exports = {

	tableName: 'raggaer_aac_news',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		
		id: {
			type: 'integer',
			primaryKey: true,
		},
		title: {
			type: 'string',
			defaultsTo: '',
			required: true
		},
		text: {
			type: 'string',
			defaultsTo: '',
			required: true
		},
		comments: {

			required: false,
			collection: 'Comments',
			via: 'news'
		}
	}
};