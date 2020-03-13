const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const server = express();

server.use(express.json());
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

server.listen(process.env.PORT, () => {
	console.log('\x1b[35mServer Running');
	console.log(`\x1b[30m\x1b[45m[ ${process.env.HOST}:${process.env.PORT} ]\x1b[0m `);
	console.log('\x1b[0m');
});
