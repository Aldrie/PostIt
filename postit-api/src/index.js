const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv/config');

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

mongoose.connect(process.env.MONGO_URL, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
.then(() => console.log('\x1b[36m Connected with DB :)\x1b[0m'))
	.catch((error) => console.error(`Error on connect to Db :( -> ${error}`));

server.use('/users', userRoutes);
server.use('/posts', postRoutes);

server.get('/files/:fileName', (req, res) => {
	const { fileName } = req.params;

	return res.sendFile(path.resolve(__dirname, '..', 'uploads', fileName), {}, (err) => {
		if(err) {
			res.sendStatus(404);
		}
	});
});

server.listen(process.env.PORT, () => {
	console.log('\x1b[35mServer Running');
	console.log(`\x1b[30m\x1b[45m[ ${process.env.HOST}:${process.env.PORT} ]\x1b[0m `);
	console.log('\x1b[0m');
});
