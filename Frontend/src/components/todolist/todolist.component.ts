import { Component } from '@angular/core';
import { TodoservService } from '../../services/todoserv.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Todo } from '../../model/Ts';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{
  constructor(private todos:TodoservService){}
  id: number = 0;
  title: string = ''; 
  status: string = ''; 
  showUpdateForm: boolean = false;

  ngOnInit() {
      this.todos.gettodolist();
  }
get todolist(){
  return this.todos.todosignal();
}

addtodo(id: number, newtitle: string, status: string, event: any) {
  event.preventDefault(); 
  console.log(id + " " +newtitle + " " + status);
  const newtodo: Todo = { id: id, title: newtitle, status: status };
  this.todos.addTask(newtodo);
  event.preventDefault();
}
deletetask(id:number){
  this.todos.deletetask(id);
}

editTask(todo: Todo) {
  console.log("Editing Task:", todo);
  this.showUpdateForm = true; // ✅ Always show the update form
  this.id = todo.id;
  this.title = todo.title;
  this.status = todo.status;
}
updateTask() {
  if (!this.id || this.id <= 0) { 
    console.error("Id is missing! Cannot update task.");
    return;
  }

  const updateTodo: Partial<Todo> = {
    title: this.title,
    status: this.status
  };

  this.todos.updateTask(this.id, updateTodo).subscribe(
    response => {
      console.log("Task updated successfully:", response);
      
     
      this.todos.gettodolist();

      
      this.showUpdateForm = false; 
    },
    error => {
      console.error("Error updating task:", error);
    }
  );
}
cancelUpdate() {
  this.showUpdateForm = false;
}
}