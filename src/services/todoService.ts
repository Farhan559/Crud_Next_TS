import {Todo , ITodo} from '../models/todoModel';
import {createTodoDto} from '../dtos/dto';

export class TodoService{
    public async createTodo(todoData:createTodoDto):Promise<ITodo>{
        const todo = new Todo(todoData);
        return await todo.save();
    }

    public async getTodos():Promise<ITodo[]>{
        return await Todo.find();
    }

    public async updateTodo(id:string,updateData:Partial<ITodo>): Promise<ITodo | null>{
        return await Todo.findByIdAndUpdate(id,updateData,{new:true});
    }

    public async deleteTodo(id:string): Promise<ITodo | null>{
        return await Todo.findByIdAndDelete(id);
    }


}   