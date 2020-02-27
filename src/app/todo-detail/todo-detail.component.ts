import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  isLoading: boolean;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public todoService: TodoService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.todoService.getOneTodo(+this.route.snapshot.paramMap.get('id')).subscribe((data: Todo) => {
      this.todo = data;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }
}
