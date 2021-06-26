import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy{
 today: Date;
 todos: any;
 todosSub: Subscription;



  constructor(private todoService : TodoService, private router : Router) { }
  ngOnDestroy(): void {
   this.todosSub.unsubscribe();

  }

  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todosSub = this.todoService.todosSubject.subscribe(
      (value :any[]) => {
        this.todos = value;
      },
      (error) => {
        console.log("erreur : " + error);

      },
      () => {
        console.log("observable Completé");

      }
      );
      this.todoService.emitTodos();
  }
  onChangeStatus(i:number) {
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i:number) {
    this.todoService.onChangeIsModif(i);

  }

  onView(id:number){
    this.router.navigate(["single-todo" , id]);
  }

}
