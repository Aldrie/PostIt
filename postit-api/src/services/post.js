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

exports.get = async (last) => {
	try {
		if(last) {
			return await Posts.find({
				_id: { $lt: last }
			}).sort({ createdAt: -1 }).limit(3).populate('author');
		}
	
		return await Posts.find().sort({ createdAt: -1 }).limit(3).populate('author');

	} catch (err) {
		return [];
	}
};

exports.getAllFromUser = async (token, last) => {
	try {
		if(last) {
			return await Posts.find({
				_id: { $lt: last },
				author: token,
			}).sort({ createdAt: -1 }).limit(3).populate('author');
		}
	
		return await Posts.find({
			author: token
		}).sort({ createdAt: -1 }).limit(3).populate('author');

	} catch(err) {
		return [];
	}
}
