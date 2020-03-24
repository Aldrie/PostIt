const { Router } = require('express');
const multer = require('multer');
const { createUserMulterConfig } = require('../config/multer');

const { jwtMiddleware } = require('../services/jwt');

const { register, login, get } = require('../services/user');

const router = Router();

router.post('/register', multer(createUserMulterConfig).single('avatar'),
	async (req, res) => {
		const { name, email, password } = req.body;

		if(name && email && password) {
			const avatarUrl = `${process.env.HOST}:${process.env.PORT}/files/${req.file.filename}`
			
			const user = await register(name, email, password, avatarUrl);
			
			if(!user) {
				return res.sendStatus(409);	
			}

			return res.json(user);
		}

		return res.sendStatus(400);
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	if(email && password) {
		const user = await login(email, password);

		if(user) {
			return res.json(user);
		}
		return res.sendStatus(404);
	}

	return res.sendStatus(409);
});

router.get('/:userId', jwtMiddleware, async (req, res) => {
	const { userId } = req.params;
	return res.json(await get(userId));
});

module.exports = router;
