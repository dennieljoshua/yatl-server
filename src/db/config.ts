import { Sequelize } from 'sequelize';

// Setup database
const sequelize = new Sequelize({
	dialect: 'postgres',
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
});

export default sequelize;
