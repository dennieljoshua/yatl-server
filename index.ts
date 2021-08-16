import express from 'express';
import dbInit from './src/db/init';
import TodoRouter from './src/routes/todo';

const app = express();

if (!process.env.PORT) {
	throw new Error('Missing PORT environment variable, check .env file');
}

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbInit();

// Routes
app.use('/api/todo', TodoRouter);

app.listen(process.env.PORT, () =>
	console.log(`Listening on PORT: ${process.env.PORT}`)
);
