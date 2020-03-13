const jwt = require('jsonwebtoken');

exports.generateJwt = (email) => {
	return jwt.sign({ email }, process.env.JWT_SECRET);
}

exports.jwtMiddleware = (req, res, next) => {
	let token = req.header('authorization');

	if(!token) {
		return res.sendStatus(403);
	}

	token = token.split(' ');

	if(token[0] === 'Bearer' && token[1]) {
		jwt.verify(token[1], process.env.JWT_SECRET, (error, user) => {
			if(error) {
				return res.sendStatus(403);
			}
			req.token = token[1];
			return next();
		});
	}else {
		return res.sendStatus(403);
	}	
}
