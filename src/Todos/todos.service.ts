import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';

@Injectable()
export class TodosService {
    getAllTodos() {
        throw new Error('Method not implemented.');
    }
    todos: TodoModel[] = [];

    insertTodo(title: string, isCompleted: boolean) {
        const id = Math.random().toString();
        const newTodo = new TodoModel(id, title, isCompleted);
        this.todos.push(newTodo);
        return id;
    }

    getTodos() {
        return this.todos;
    }

    getSingleTodo(id: string) {
        const todo = this.todos.find((todo) => todo.id == id);
    }
    updateTodo(id: string, title: string, isCompleted: boolean) {
        const todo = this.todos.find((todo) => todo.id == id);
        return { ...todo };
    }
    removeTodo(id: string) {
        const todo = this.todos.find((todo) => todo.id == id);
        return todo;
    }
}
