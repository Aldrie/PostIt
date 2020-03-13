const Posts = require('../models/Post');
const Users = require('../models/User');

exports.create = async (token, content) => {
	const user = await Users.findOne({ token });

	if(user) {
		return await Posts.create({ content, author: user });
	}
};

exports.getAll = async () => {
	return await Posts.find();
};

// exports.get = async (page) => {
// 	const limit = 3;
	
// 	if(!page || page < 1) {
// 		page = 1;
// 	}

// 	return await Posts.find().sort({ createdAt: -1 })
// 		.skip((page -1) * limit)
// 			.limit(limit);
// };

exports.getAllFromUser = async (token) => {
	return await Posts.find({ author: token });
}
