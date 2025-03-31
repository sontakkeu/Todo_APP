package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Repository.TodoRepository;
import com.example.entity.Todo;

import jakarta.transaction.Transactional;

@Service
public class TodoService {
	@Autowired
	TodoRepository tresp;
	@Transactional 
	public Todo addtask(Todo t1) {
		return tresp.save(t1);
	}
	
	public String addalltask(List<Todo> tlist) {
		tresp.saveAll(tlist);
		return "task added successfully";
	}
	
	  public void deletebyid(int id) {
	        tresp.deleteById(id);
	    }
	
	public List<Todo> findall(){
		return tresp.findAll();
	}
	
	public Optional<Todo> findbyid(int id) {
		return tresp.findById(id);
	}
	
	public String updatebyid(int id, Todo todonew) {
        Todo oldtodo = tresp.findById(id).orElse(null);
        if (oldtodo != null) {
            if (todonew != null) {
                if (todonew.getTitle() != null) {
                    oldtodo.setTitle(todonew.getTitle());
                }
                if (todonew.getStatus() != null) {
                    oldtodo.setStatus(todonew.getStatus());
                }
                tresp.save(oldtodo); 
                return "Record updated successfully";
            }
            return "New record is empty";
        }
        return "No data to update";
    }
}