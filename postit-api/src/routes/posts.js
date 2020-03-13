const { Router } = require('express');

const { create, getAll, getAllFromUser, get } = require('../services/post');
const { jwtMiddleware } = require('../services/jwt');

const router = Router();

router.post('/create', jwtMiddleware, async (req, res) => {
	const { content } = req.body;

	if(content) {
		return res.json(await create(req.token, content));
	}

	return res.sendStatus(400);
});

router.get('/', jwtMiddleware, async (req, res) => {
	return res.json(await getAll());
});

// router.get('/', jwtMiddleware, async (req, res) => {
// 	const { page } = req.query;
// 	return res.json(await get(page));
// });

router.get('/:userId', jwtMiddleware, async (req, res) => {
	const { userId } = req.params;
	return res.json(await getAllFromUser(userId));
});



module.exports = router;
