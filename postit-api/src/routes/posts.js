const { Router } = require('express');

const { create, get, getAllFromUser } = require('../services/post');
const { jwtMiddleware } = require('../services/jwt');

const router = Router();

router.post('/create', jwtMiddleware,
	async (req, res) => {
		const { content } = req.body;

		if(content) {
			const post = await create(req.token, content);

			if(post) {
				return res.json(post);
			}
		}

		return res.sendStatus(400);
});

router.get('/', jwtMiddleware, async (req, res) => {
	const { last } = req.query;
	return res.json(await get(last));
});

router.get('/:userId', jwtMiddleware, async (req, res) => {
	const { userId } = req.params;
	const { last } = req.query;

	return res.json(await getAllFromUser(userId, last));
});



module.exports = router;
