import { Sequelize } from 'sequelize';

// Setup database
let sequelize: Sequelize;
if (process.env.NODE_ENV === 'production') {
	if (!process.env.DATABASE_URL) {
		throw new Error('Missing Heroku Postgress Environment Variable');
	}
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
