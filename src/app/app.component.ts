import { Component, OnInit } from '@angular/core';
import { Model, ToDoItem } from './model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = new Model();
  newTask: string = '';
  isDisplayAll: boolean = true;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    const savedTodos = this.todoService.getTodos();
    if (savedTodos.length > 0) {
      this.model.items = savedTodos;
    }
  }

  getItems() {
    if (this.isDisplayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem() {
    if (this.newTask.trim() !== '') {
      this.model.items.push(new ToDoItem(this.newTask.trim(), false));
      this.newTask = '';
      this.saveData();
    }
  }

  deleteItem(index: number) {
    this.model.items.splice(index, 1);
    this.saveData();
  }

  toggleAction(item: ToDoItem) {
    item.action = !item.action;
    this.saveData();
  }

  saveData() {
    this.todoService.saveTodos(this.model.items);
  }
}
