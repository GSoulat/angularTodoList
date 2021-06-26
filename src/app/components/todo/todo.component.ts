import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 today: Date;
 todos: any;



  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;

  }
  onChangeStatus(i:number) {
    this.todoService.onChangeStatus(i);
  }

  onChangeIsModif(i:number) {
    this.todoService.onChangeIsModif(i);

  }

}
