import { Router, Request, Response } from 'express';

const TodoRouter = Router();

TodoRouter.get('/', function getAllTodos(req: Request, res: Response) {
	res.send('Hello World');
});
