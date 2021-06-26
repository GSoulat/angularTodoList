import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './components/home/home.component';
import { FotFoundComponent } from './components/fot-found/fot-found.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

export const ROUTES: Routes = [
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
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    HomeComponent,
    FotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
