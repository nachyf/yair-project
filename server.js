const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose');

	const DB =
	'mongodb://localhost:27017/yair';

const YairRoutes = require('./routes/Yair.route');

	mongoose.Promise = global.Promise;
	mongoose.connect(DB).then(
	  () => {console.log('Database is connected') },
	  err => { console.log('Can not connect to the database'+ err)}
	);

const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use('/Yair', YairRoutes);

const port = process.env.PORT || 5500;

const server = app.listen(port, function(){
	console.log('Listening on port ' + port);
});
