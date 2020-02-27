import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public isLoading: boolean;

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;
    return this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todoService.todos = data;
      this.isLoading = false;
    });
  }

}
