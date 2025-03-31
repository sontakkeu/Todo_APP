import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/Ts';

@Injectable({
  providedIn: 'root'
})
export class TodoservService {

  constructor(private http:HttpClient) { }
   todosignal=signal<Todo[]>([]);
   gettodolist(){
    this.http.get<Todo[]>(`http://localhost:8080/todo/findalltask`)
    .subscribe((todolist)=>this.todosignal.set(todolist));
   }

   addTask(todo: Todo) {
    this.http.post<Todo>(`http://localhost:8080/todo/addtask`, todo)
      .subscribe(newTodo => {
        this.todosignal.set([...this.todosignal(), newTodo]); 
      });
  }
  
  deletetask(id: number) {
    this.http.delete<{ message: string }>(`http://localhost:8080/todo/deletetask/${id}`)
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.todosignal.set(this.todosignal().filter(todo => todo.id !== id));
        },
        error: (err) => {
          console.error('Error deleting task:', err);
        }
      });
    }
  
    updateTask(id: number, updatedTodo: Partial<Todo>) {
      return this.http.put<Todo>(`http://localhost:8080/todo/updatetask/${id}`, updatedTodo);
    }

    
  }      