import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from '../components/todolist/todolist.component';
import { CalculatorComponent } from '../calculator/calculator.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_app';

}
