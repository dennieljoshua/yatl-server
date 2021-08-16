import { Sequelize } from 'sequelize';
import pgString from 'pg-connection-string';

let parse = pgString.parse;

// Setup database
let sequelize: Sequelize;
if (process.env.NODE_ENV === 'production') {
	if (!process.env.DATABASE_URL) {
		throw new Error('Missing Heroku Postgress Environment Variable');
	}
	const config = parse(process.env.DATABASE_URL);
	console.log(config);
	// sequelize = new Sequelize({
	// 	dialect: 'postgres',
	// 	username: config.user!,
	// 	password: config.password!,
	// 	database: config.database!,
	// 	host: config.host!,
	// });
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	});
} else {
	sequelize = new Sequelize({
		dialect: 'postgres',
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
	});
}

export default sequelize;
