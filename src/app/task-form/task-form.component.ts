import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importa FormsModule aquí
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<any>(); // Emisor del evento

  task = {
    name: '',
    description: '',
    priority: 'Media',
    status: 'Pendiente',
    assignedTo: '',
  };

  members: string[] = ['Juan', 'Ana', 'Luis']; // Lista de miembros del equipo

  addTask() {
    if (this.task.name.trim()) {
      this.taskCreated.emit(this.task); // Notifica al componente padre
      this.resetForm();
    }
  }

  resetForm() {
    this.task = {
      name: '',
      description: '',
      priority: 'Media',
      status: 'Pendiente',
      assignedTo: '',
    };
  }
}
