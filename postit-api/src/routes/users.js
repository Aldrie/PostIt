const { Router } = require('express');
const multer = require('multer');
const { createUserMulterConfig } = require('../config/multer');

const { jwtMiddleware } = require('../services/jwt');

const { register, login, getAll } = require('../services/user');

const router = Router();

router.post('/register', multer(createUserMulterConfig).single('avatar'),
	async (req, res) => {
		const { name, email, password } = req.body;

		if(name && email && password) {
			console.log(req.file);
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
		return res.sendStatus(403);
	}

	return res.sendStatus(409);
});

router.get('/', jwtMiddleware, async (req, res) => {
	return res.json(await getAll());
});

module.exports = router;
