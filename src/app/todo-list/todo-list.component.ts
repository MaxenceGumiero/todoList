import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public isLoading: boolean;

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;
    return this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todoService.todos = data;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

}
