import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './components/home/home.component';
import { FotFoundComponent } from './components/fot-found/fot-found.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path:'home', component: TodoComponent},
  {path:'contact', component: ContactComponent},
  {path:'fot-found', component: FotFoundComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},
  {path:'todo', component: TodoComponent},
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
