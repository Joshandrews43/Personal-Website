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
	res.render('index', { title: 'Josh Andrews'})
});

// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});
