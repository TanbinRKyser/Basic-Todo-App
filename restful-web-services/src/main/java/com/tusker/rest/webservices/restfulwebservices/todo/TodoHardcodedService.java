package com.tusker.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>(  );
    private static long idCounter = 0;

    static {
        todos.add( new Todo( ++idCounter, "root", "Learn Python", new Date(), false ) );
        todos.add( new Todo( ++idCounter, "root", "Learn Java", new Date(), false ) );
        todos.add( new Todo( ++idCounter, "root", "Learn Angular", new Date(), false ) );
    }

    public List<Todo> findAll(){
        return todos;
    }

    // Save Todos
    public Todo saveTodo(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId( ++idCounter );
            todos.add( todo );
        } else{
            deleteById( todo.getId() );
            todos.add( todo );
        }
        return todo;
    }
    // Delete
    public Todo deleteById(long id){
        Todo todo = findById(id);

        if( todo == null ) { return null; }

        if(todos.remove(todo)) { return todo; }

        return null;
    }

    public Todo findById( long id ) {
        for( Todo todo : todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
