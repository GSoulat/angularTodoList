import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today = new Date();
  todos :Todo[];
  todosSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {
    // this.todos =[
    //   {
    //     todoName:"Projet 1 ",
    //     todoStatus: true,
    //     image:"http://placehold.it/150",
    //     description:"ffenfezkfe fkezfkefne fkfnezfn ezfnefne lffnzefe znfenzfe zlflnfzff",
    //     isModif : false,
    //   },
    //   {
    //     todoName:"Projet 2 ",
    //     todoStatus: false,
    //     image:"http://placehold.it/150",
    //     description:"ffenfezkfe fkezfkefne fkfnezfn ezfnefne lffnzefe znfenzfe zlflnfzff",
    //     isModif : false,
    //   },
    //   {
    //     todoName:"Projet 3 ",
    //     todoStatus: true,
    //     image:"http://placehold.it/150",
    //     description:"ffenfezkfe fkezfkefne fkfnezfn ezfnefne lffnzefe znfenzfe zlflnfzff",
    //     isModif : false,
    //   },
    //   {
    //     todoName:"Projet 4 ",
    //     todoStatus: false,
    //     image:"http://placehold.it/150",
    //     description:"ffenfezkfe fkezfkefne fkfnezfn ezfnefne lffnzefe znfenzfe zlflnfzff",
    //     isModif : false,
    //   },
    //   {
    //     todoName:"Projet 5 ",
    //     todoStatus: true,
    //     image:"http://placehold.it/150",
    //     description:"ffenfezkfe fkezfkefne fkfnezfn ezfnefne lffnzefe znfenzfe zlflnfzff",
    //     isModif : false,
    //   },];
      this.getTodoFromServer();
  }

  addTodo(todo : Todo):void{
    this.todos.unshift(todo);
    this.todosSubject.next(this.todos);
    this.saveTodoFromServer();
  }


  onChangeStatus(i:number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.saveTodoFromServer();
    this.emitTodos();
  }

  onChangeIsModif(i:number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.saveTodoFromServer();
    this.emitTodos();
  }

  getTodo(index:number){
    if(this.todos[index]){
      return this.todos[index]
    }
    return false;
  }
  emitTodos(){
    this.todosSubject.next(this.todos);
  }
  // https://todolist-de1c2-default-rtdb.europe-west1.firebasedatabase.app/
  saveTodoFromServer():void{
    this.httpClient.put("https://todolist-7c0b2-default-rtdb.europe-west1.firebasedatabase.app/todos.json", this.todos).subscribe(
      ()=> {
        console.log("données enregistré avec success");

      },
      (error)=>{
        console.log("erreur de sauvvgarde" + error);

      }
    );
  }

  getTodoFromServer():void{
    this.httpClient.get<Todo[]>("https://todolist-7c0b2-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
    .subscribe(
      (todoRecup : Todo[]) => {
        this.todos = todoRecup;
        this.emitTodos();
      },
      (error) =>{
        console.log("Errreur de lecture" + error);
      },
      ()=> {
        console.log("recupération des donnée terminé");

      }
    )
  }
}
