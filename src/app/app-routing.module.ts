import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoNewComponent } from './todo-new/todo-new.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos/new', component: TodoNewComponent, pathMatch: 'full' },
  { path: 'todos/:id', component: TodoDetailComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
