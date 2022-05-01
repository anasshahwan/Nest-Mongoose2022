import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todoService: TodosService) {}
    @Post()
    addTodo(@Body('title') todoTitle: string, @Body('isCompleted') isCompleted: boolean): any {
        const generatedId = this.todoService.insertTodo(todoTitle, isCompleted);
        return { id: generatedId };
    }

    @Get()
    getAllTodos() {
        return this.todoService.getTodos();
    }

    @Get(':id')
    getTodo(@Param('id') id: string) {
        return this.todoService.getSingleTodo(id);
    }
    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body('title') title: string, @Body('isCompleted') isCompleted: boolean) {
        return this.todoService.updateTodo(id, title, isCompleted);
    }

    @Delete(':id')
    removeTodo(@Param('id') id: string) {
        return this.todoService.removeTodo(id);
    }
}
