import { Router, Request, Response, request } from 'express';
import Todo from '../db/models/Todo';

const TodoRouter = Router();

TodoRouter.get('/', async function getAllTodos(req: Request, res: Response) {
	res.send(await Todo.findAll());
});

TodoRouter.get('/:id', async function getTodo(req: Request, res: Response) {
	const { id } = req.params;

	if (!id) {
		throw new Error(`Invalid Todo ID: ${id}`);
	}

	const todo = await Todo.findOne({
		where: {
			id,
		},
	});

	if (!todo) {
		return res.sendStatus(404);
	}

	res.send(todo);
});

TodoRouter.post('/', async function createTodo(req: Request, res: Response) {
	const data = req.body;

	const todo = await Todo.create(data);

	res.send(todo);
});

TodoRouter.put('/:id', async function updateTodo(req: Request, res: Response) {
	const result = await Todo.update(
		{
			isDone: req.body.isDone,
			name: req.body.name,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	);

	res.send(result);
});

export default TodoRouter;
