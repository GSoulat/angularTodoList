import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today = new Date();
  todos :any;
  todosSubject = new Subject<any[]>();

  onChangeStatus(i:number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
  }

  onChangeIsModif(i:number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
  }

  getTodo(index:number){
    if(this.todos[index]){
      return this.todos[index]
    }
    return false;
  }


  constructor() {

    this.todos = new Promise((resolve,rejects)  => {

        setTimeout(() => {
          this.todos =[
            {
              todoName:"Projet 1 ",
              todoStatus: true,
              image:"http://placeimg.com/150/150/tech",
              isModif : false,
              description : "nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis"
            },
            {
              todoName:"Projet 2 ",
              todoStatus: true,
              image:"http://placeimg.com/150/150/tech",
              isModif : false,
              description : "nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis"
            },
            {
              todoName:"Projet 3 ",
              todoStatus: true,
              image:"http://placeimg.com/150/150/tech",
              isModif : false,
              description : "nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis"
            },
            {
              todoName:"Projet 4 ",
              todoStatus: true,
              image:"http://placeimg.com/150/150/tech",
              isModif : false,
              description : "nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis"
            },
            {
              todoName:"Projet 5 ",
              todoStatus: true,
              image:"http://placeimg.com/150/150/tech",
              isModif : false,
              description : "nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis"
            },
          ];
          this.emitTodos();
        }, 3000);

    });
  }

  emitTodos(){
    this.todosSubject.next(this.todos);

  }
}
