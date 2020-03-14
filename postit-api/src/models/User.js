const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	avatar: String,
	password: {
		type: String,
		required: true,
		select: false,
	},
	token: {
		type: String,
		select: false,
		unique: true,
	},
});

module.exports = model('Users', UserSchema);
