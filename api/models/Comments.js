module.exports = {

	autoPk: false,
	tableName: 'raggaer_aac_comments',
	attributes: {

		id: {
			
			type: 'integer',
			primaryKey: true
		},
		created_by: {

			type: 'string',
			required: 'true'
		},
		comment: {

			type: 'string',
			required: 'comment',
			unique: true,
			minLength: 10,
			maxLength: 100
		},
		news: {

			model: 'News',
			required: true
		}
	}
}