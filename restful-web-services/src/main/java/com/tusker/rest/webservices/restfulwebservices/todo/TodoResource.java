package com.tusker.rest.webservices.restfulwebservices.todo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {

    private final TodoHardcodedService todoHardcodedService;

    public TodoResource( TodoHardcodedService todoHardcodedService ) {
        this.todoHardcodedService = todoHardcodedService;
    }

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllTodos( @PathVariable String username ){
        return todoHardcodedService.findAll();
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo getTodo( @PathVariable String username, @PathVariable long id ){
        return todoHardcodedService.findById( id );
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.deleteById( id );
        if ( todo != null ){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateToDo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo updatedTodo = todoHardcodedService.saveTodo( todo );
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<Void> postToDo(@PathVariable String username, @RequestBody Todo todo) {
        Todo createdTodo = todoHardcodedService.saveTodo( todo );

        // Return resource URL
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path( "/{id}" ).buildAndExpand( createdTodo.getId() ).toUri();

        return ResponseEntity.created( uri ).build();
    }
}
