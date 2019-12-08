import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

// For best practice we need to 
// create a class and populate the todos object 
export class Todo {

  // constructor and parameters
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // Creating a object
  /*todo = {
      id : 1,
      descirption: 'Learn Music'
    } */

  // using a object array 
  /*todos = [
      { id : 1, descirption: "Learn Music"},
      { id : 2, descirption: "Become an expert on Angular"},
      { id : 3, descirption: "Expert on Spring Boot."},
      { id : 4, descirption: "Expert on bash and sql."}
    ] */

  // Best practice to create an object array.
  // todos = [
  //   new Todo(0,'Learn python3',false,new Date()),
  //   new Todo(1,'Become an expert on Angular',false,new Date()),
  //   new Todo(2,'Expert on Spring Boot',false,new Date())
  // ]
  todos: Todo[]

  message: string
  username: string
  // Cosntructor of the class
  constructor(private todoService: TodoDataService, private router: Router) { }

  // Implemented method from NgOnInit
  ngOnInit() {
    // this.username = this.welcome.name
    this.refreshTodos()
  }

  refreshTodos() {
    this.username = sessionStorage.getItem('username')
    this.todoService.retrieveAllTodos(this.username).subscribe(
      response => {
        console.log(response)
        this.todos = response
        // console.log(this.todos[0].description)
      }
    )
  }

  deleteTodo(id) {
    this.username = sessionStorage.getItem('username')
    console.log(`Delete todo. ${id}`)
    this.todoService.deleteTodoService(this.username, id).subscribe(
      response => {
        // console.log(response)
        this.message = `Deleted todo # ${id} successfully.`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id) {
    console.log(`Edit todo ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}


