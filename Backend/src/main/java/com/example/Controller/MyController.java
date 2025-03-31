package com.example.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Service.TodoService;
import com.example.entity.Todo;
@RequestMapping("/todo")
@CrossOrigin(origins = "http://localhost:4200")  //it is conections provide backend to front end
@RestController
public class MyController {
	@Autowired
	TodoService tserv;

	@PostMapping("/addtask")
	public Todo addtask(@RequestBody Todo t1) {
		return tserv.addtask(t1);
	}

	@PostMapping("/addalltask")
	public String addalltask(@RequestBody List<Todo> tlist) {
		return tserv.addalltask(tlist);
	}

	@DeleteMapping("/deletetask/{id}")
	public ResponseEntity<Map<String, String>> deleteTask(@PathVariable("id") int id) {
	    tserv.deletebyid(id); // Call the service method
	    Map<String, String> response = new HashMap<>();
	    response.put("message", "Task deleted successfully");
	    return ResponseEntity.ok(response);
	}


	@GetMapping("/findtaskbyid")
	public Optional<Todo> findtaskbyid(@RequestParam int id) {
		return tserv.findbyid(id);
	}

	@GetMapping("/findalltask")
	public List<Todo> findalltask() {
		return tserv.findall();
	}
	@PutMapping("/updatetask/{id}")
	public ResponseEntity<Map<String, String>> updatetask(@PathVariable("id") int id, @RequestBody Todo newtodo) {
	    tserv.updatebyid(id, newtodo);
	    Map<String, String> response = new HashMap<>();
	    response.put("message", "Task updated successfully");
	    return ResponseEntity.ok(response);
	}
	}
