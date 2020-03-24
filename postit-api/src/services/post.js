const Posts = require('../models/Post');
const Users = require('../models/User');

exports.create = async (token, content) => {
	try {
		const user = await Users.findOne({ token });

		if(user) {
			const post = await Posts.create({ content, author: user });
			return await post.populate('author');
		}
	} catch(err) {
		return false;
	}
};

exports.get = async (id) => {
	try {
		return await Posts.findById(id).populate('author');
	} catch(err) {
		return [];
	}
};

exports.list = async (last) => {
	try {
		if(last) {
			return await Posts.find({
				_id: { $lt: last }
			}).sort({ createdAt: -1 }).limit(6).populate('author');
		}
	
		return await Posts.find().sort({ createdAt: -1 }).limit(6).populate('author');

	} catch (err) {
		return [];
	}
};

exports.listAllFromUser = async (id, last) => {
	try {
		if(last) {
			return await Posts.find({
				_id: { $lt: last },
				author: id,
			}).sort({ createdAt: -1 }).limit(6).select('-author');
		}
	
		return await Posts.find({
			author: id,
		}).sort({ createdAt: -1 }).limit(6).select('-author');

	} catch(err) {
		return [];
	}
}
