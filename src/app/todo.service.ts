import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';
import { TODOS } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = TODOS;
  private todoListUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private httpClient: HttpClient) { }

  public getTodoListUrl = () => {
    this.httpClient.get(this.todoListUrl)
      .subscribe(response => {
        console.log(response);
      });
  }
}
