import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true, // Indica que es standalone
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = []; // Define la entrada para recibir las tareas

  filter: 'Todas' | 'Pendiente' | 'En progreso' | 'Completada' = 'Todas';

  get filteredTasks(): Task[] {
    return this.filter === 'Todas'
      ? this.tasks
      : this.tasks.filter((task) => task.status === this.filter);
  }

  deleteTask(id: number): void {
    // Lógica para eliminar la tarea dentro de las tareas proporcionadas
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
