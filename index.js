const express = require('express');
const reactViews = require('express-react-views');

const app = express();

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');

// console.log(__dirname)
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', (req, res) => {
	res.render('App');
})

app.listen(() => console.log(`server is up!`));