const Users = require('../models/User');
const bcrypt = require('bcryptjs');

const { generateJwt } = require('../services/jwt');

exports.register = async (name, email, password) => {
	const user = await Users.findOne({ email });

	console.log(user);
	if(user) {
		return false; 
	}

	const salt =  bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
	const encyptedPassword = bcrypt.hashSync(password, salt);
	const token = generateJwt(email);

	return await Users.create({ name, email, password: encyptedPassword, token });
};

exports.login = async (email, password) => {
	let user = await Users.findOne({ email }).select(['+password', '+token']);
	
	if(user) {
		if(bcrypt.compareSync(password, user.password)) {
			user.password = undefined;
			return user;
		}
	}

	return false;
}

exports.getAll = async () => {
	return await Users.find();
}
