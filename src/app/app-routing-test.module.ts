import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FotFoundComponent } from './components/fot-found/fot-found.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const ROUTES: Routes = [
  {path:'home', component: TodoComponent},
  {path:'contact', component: ContactComponent},
  {path:'fot-found', component: FotFoundComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},
  {path:'todo', component: TodoComponent},
  {path:'users', component: UsersComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'addtodo', component: AddTodoComponent},
  {path:'', component: TodoComponent},
  {path:'**', pathMatch:'full', redirectTo: 'fot-found'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingTestModule { }
