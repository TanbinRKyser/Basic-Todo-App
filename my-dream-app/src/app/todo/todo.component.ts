import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  username: string
  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username')
    // Get the id from URL parameter.
    this.id = this.route.snapshot.params['id']
    // Default todo while we are getting it from service. It will be visible only if our service is slow or we're creating  a new one.
    this.todo = new Todo(this.id, '', false, new Date())
    // We're getting data from service unless we're creating a new service.
    if (this.id != -1) {
      this.todoService.retrieveTodo(this.username, this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    this.username = sessionStorage.getItem('username')
    // if (this.id === -1) { // use === when you're using objects, == when you're using primitives
    // Create Todo
    if (this.id == -1) {
      this.todoService.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      // Update Todo
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
