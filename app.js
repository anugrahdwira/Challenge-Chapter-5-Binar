const express = require('express');
const res = require('express/lib/response');

const route = require('./route');

const errorMiddleware = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notfound');
const { urlencoded } = require('express');

const app = express();

const port = 3000;

const users = [];

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);


app.listen(port);




