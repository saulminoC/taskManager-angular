import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent], // Importa los componentes standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: any[] = []; // Lista de tareas

  onTaskCreated(task: any): void {
    this.tasks.push(task); // Agrega la nueva tarea
    console.log('Nueva tarea creada:', task);
  }
}
