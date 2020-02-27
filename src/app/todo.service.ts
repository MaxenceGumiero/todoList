import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[];
  public todo: Todo;
  private apiURL = 'http://localhost:8000/todos';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.todos = [];
  }

  private handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public getTodos = (): Observable<Todo[]> => {
    return this.http.get<Todo[]>(this.apiURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public getOneTodo = (id: number): Observable<Todo> => {
    return this.http.get<Todo>(`${this.apiURL}/${id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public postTodo = (todo: Todo): Observable<Todo> => {
    return this.http.post<Todo>(`${this.apiURL}/new`, todo, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
