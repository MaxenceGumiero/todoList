import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  public todoForm = new Todo(0, 0, 'Title', true);

  public todoFormSelect = [
    { display: 'True', value: true },
    { display: 'False', value: false },
  ];

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public postTodo = (): void => {
    this.todoService.postTodo(this.todoForm).subscribe(then => {
      this.router.navigate(['/todos']);
    });
  }
}
