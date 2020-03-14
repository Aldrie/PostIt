const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Users',
	}
}, { timestamps: true });

module.exports = model('Posts', PostSchema);
