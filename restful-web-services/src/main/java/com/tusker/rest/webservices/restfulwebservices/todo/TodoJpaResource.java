package com.tusker.rest.webservices.restfulwebservices.todo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Iterator;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJpaResource {

    private final TodoJpaRepository todoJpaRepository;

    public TodoJpaResource( TodoJpaRepository todoJpaRepository ) {
        this.todoJpaRepository = todoJpaRepository;
    }

    @GetMapping(path = "/jpa/users/{username}/todos")
    public List<Todo> getAllTodos( @PathVariable String username ){
        return todoJpaRepository.findByUsername( username );
    }

    @GetMapping(path = "/jpa/users/{username}/todos/{id}")
    public Todo getTodo( @PathVariable String username, @PathVariable long id ){
        return todoJpaRepository.findById( id ).get();
    }

    @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable String username, @PathVariable long id) {
        todoJpaRepository.deleteById( id );
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateToDo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo updatedTodo = todoJpaRepository.save( todo );
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/users/{username}/todos")
    public ResponseEntity<Void> createToDo(@PathVariable String username, @RequestBody Todo todo) {
	todo.setUsername( username );
        Todo createdTodo = todoJpaRepository.save( todo );

        // Return resource URL
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path( "/{id}" )
                .buildAndExpand( createdTodo.getId() )
                .toUri();

        return ResponseEntity.created( uri ).build();
    }
}
