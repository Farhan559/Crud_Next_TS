import { Request,Response,NextFunction } from "express";
import { TodoService } from "../services/todoService";
import { createTodoDto } from "../dtos/dto";

const todoService = new TodoService();
export const createTodo = async(req:Request,res:Response)=>{
    const todoData: createTodoDto = req.body;
    const todos = await todoService.createTodo(todoData);
    res.status(201).json(todos);
}
export const getTodos = async (_req: Request, res: Response) => {
    const todos = await todoService.getTodos();
    res.status(200).json(todos);
  };
export const updateTodo = async(req:Request,res:Response)=>{
    const updatedTodo = await todoService.updateTodo(req.params.id, req.body);
    res.status(200).json(updateTodo);
};

export const deleteTodo = async(req:Request,res:Response)=>{
    const deletedTodo = await todoService.deleteTodo(req.params.id);
    res.status(204).json(deletedTodo);
}