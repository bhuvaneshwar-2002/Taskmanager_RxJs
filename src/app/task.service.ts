import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interface for Task
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // BehaviorSubject to hold the task list
  private tasksSubject = new BehaviorSubject<Task[]>(this.loadTasks());

  // Observable to expose tasks
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {
    // Save tasks to localStorage whenever tasks change
    this.tasks$.subscribe(tasks => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  // Load tasks from localStorage
  private loadTasks(): Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [
      { id: 1, title: 'Learn RxJS', completed: false },
      { id: 2, title: 'Build Angular App', completed: true }
    ];
  }

  // Get tasks filtered by completion status
  getTasks(completed?: boolean): Observable<Task[]> {
    return this.tasks$.pipe(
      map(tasks => {
        if (completed !== undefined) {
          return tasks.filter(task => task.completed === completed);
        }
        return tasks;
      })
    );
  }

  // Add a new task
  addTask(title: string): void {
    const tasks = this.tasksSubject.getValue();
    const newTask: Task = {
      id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title,
      completed: false
    };
    this.tasksSubject.next([...tasks, newTask]);
  }

  // Toggle task completion
  toggleTaskCompletion(id: number): void {
    const tasks = this.tasksSubject.getValue().map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(tasks);
  }

  // Delete a task
  deleteTask(id: number): void {
    const tasks = this.tasksSubject.getValue().filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
  }
}