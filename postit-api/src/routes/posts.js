const { Router } = require('express');

const { create, get, list, listAllFromUser } = require('../services/post');
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

router.get('/:postId', jwtMiddleware, async (req ,res) => {
	const { postId } = req.params;
	return res.json(await get(postId));
});

router.get('/', jwtMiddleware, async (req, res) => {
	const { last } = req.query;
	return res.json(await list(last));
});

router.get('/user/:userId', jwtMiddleware, async (req, res) => {
	const { userId } = req.params;
	const { last } = req.query;

	return res.json(await listAllFromUser(userId, last));
});



module.exports = router;
