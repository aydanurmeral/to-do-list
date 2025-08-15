import { Injectable } from '@angular/core';
import { ToDoItem } from './model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageKey = 'todos';

  getTodos(): ToDoItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveTodos(todos: ToDoItem[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
