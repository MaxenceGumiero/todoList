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

  handleError = (error) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getTodos = (): Observable<Todo[]> => {
    return this.http.get<Todo[]>(this.apiURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOneTodo = (id: number): Observable<Todo> => {
    return this.http.get<Todo>(`${this.apiURL}/${id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

}
