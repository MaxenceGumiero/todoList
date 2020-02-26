import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';
import { TODOS } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[];
  public todo: Todo;
  private todoListUrl = 'http://localhost:8000/todos';

  constructor(private httpClient: HttpClient) { }

  public getTodoListUrl = () => {
    this.httpClient.get(this.todoListUrl)
      .subscribe((response: Todo[]) => {
        console.log(response);
        this.todos = response;
        console.log(this.todos);
      });
  }
}
