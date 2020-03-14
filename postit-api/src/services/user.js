const Users = require('../models/User');
const bcrypt = require('bcryptjs');

const { generateJwt } = require('../services/jwt');

exports.register = async (name, email, password, avatarUrl) => {
	try {
		const user = await Users.findOne({ email });
		
		if(user) {
			return false; 
		}

		const salt =  bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
		const encyptedPassword = bcrypt.hashSync(password, salt);
		const token = generateJwt(email);

		return await Users.create({ name, email, password: encyptedPassword, token, avatar: avatarUrl });
	} catch(err) {
		return false;
	}
};

exports.login = async (email, password) => {
	try {
		let user = await Users.findOne({ email }).select(['+password', '+token']);
	
		if(user) {
			if(bcrypt.compareSync(password, user.password)) {
				user.password = undefined;
				return user;
			}
		}
	
		return false;
	} catch(err) {
		return false;
	}
}

exports.getAll = async () => {
	return await Users.find();
}
