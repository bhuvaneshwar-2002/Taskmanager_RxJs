import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allTasks$!: Observable<Task[]>;
  activeTasks$!: Observable<Task[]>;
  completedTasks$!: Observable<Task[]>;
  searchControl = new FormControl('');
  filteredTasks$!: Observable<Task[]>;
  activeTab: string = 'all';
  isDarkMode: boolean = false;

  constructor(private taskService: TaskService) {
    // Load dark mode preference
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.updateTheme();
  }

  ngOnInit(): void {
    this.allTasks$ = this.taskService.getTasks();
    this.activeTasks$ = this.taskService.getTasks(false);
    this.completedTasks$ = this.taskService.getTasks(true);

    this.filteredTasks$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        const term = searchTerm?.toLowerCase() || '';
        return this.taskService.getTasks().pipe(
          map(tasks => tasks.filter(task => task.title.toLowerCase().includes(term)))
        );
      })
    );
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.taskService.addTask(title);
      this.searchControl.setValue('');
    }
  }

  toggleTask(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.updateTheme();
  }

  private updateTheme(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }
}