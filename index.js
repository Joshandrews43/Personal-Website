//index.js

const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')


app.use('/static', express.static(__dirname + "/public"));

app.use('/', router);

app.set('views', __dirname + '/html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

router.get('/', (req, res) => {
	res.render('index', { title: 'Homepage'});
});

router.get('/home', (req, res) => {
	res.render('index', { title: 'Homepage'})
});

router.use('/fullstack', (req, res) => {
	res.render('fullstack', { title: 'fullstack'});
});

router.use('/ios', (req, res) => {
	res.render('ios', { title: 'iOS Developer'});
});

// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});
