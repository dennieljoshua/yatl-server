import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config';

interface TodoAttributes {
	id: number;
	name: string;
	isDone: boolean;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

class Todo
	extends Model<TodoAttributes, TodoCreationAttributes>
	implements TodoAttributes
{
	public id!: number;
	public name!: string;
	public isDone!: boolean;

	// timestamps
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Todo.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		isDone: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		timestamps: true,
		sequelize: sequelize,
		paranoid: true,
	}
);

export default Todo;
