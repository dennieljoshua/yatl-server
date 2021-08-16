import Todo from './models/Todo';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
	Todo.sync({ alter: isDev });
};

export default dbInit;
