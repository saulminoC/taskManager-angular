import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  description: string;
  priority: 'Alta' | 'Media' | 'Baja';
  status: 'Pendiente' | 'En progreso' | 'Completada';
  assignedTo: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id'>): void {
    this.tasks.push({ ...task, id: this.nextId++ });
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
