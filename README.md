
Task Manager with Angular & RxJS

A modern, responsive task management application built with Angular and RxJS, demonstrating reactive programming, state management, and a polished user interface. This project showcases my skills in front-end development, RxJS Observables, and creating user-friendly, professional-grade applications.
Features

Reactive Task Management: Add, toggle, and delete tasks with real-time updates using RxJS Observables and BehaviorSubject.
Search Functionality: Filter tasks reactively with RxJS operators (debounceTime, distinctUntilChanged, switchMap).
Tabbed Interface: View tasks in categorized tabs (All, Active, Completed, Search) for intuitive navigation.
Local Storage: Persist tasks across sessions using localStorage, integrated with RxJS for seamless state management.
Dark/Light Mode: Toggle between themes with CSS variables, saved in localStorage for user preference.
Polished UI: Modern card-based design with animations (slide-in for task addition, fade-out for deletion), responsive layout, and Font Awesome icons.
Type Safety: Resolved TypeScript errors (e.g., TS2322, TS2345) for robust code.
Performance Optimization: Used trackBy in *ngFor to optimize rendering.

Tech Stack

Angular: Component-based architecture, reactive forms, and async pipe for efficient rendering.
RxJS: Observables, BehaviorSubject, and operators (map, switchMap, debounceTime, distinctUntilChanged) for reactive data handling.
TypeScript: Strict typing and error handling for maintainable code.
SCSS: CSS variables, animations, and responsive design for a modern UI.
Font Awesome: Icons for enhanced visual appeal.
Google Fonts (Poppins): Clean, professional typography.
Local Storage: Persistent data storage with RxJS integration.

Getting Started
Prerequisites

Node.js (v16 or higher)
Angular CLI: Install globally with npm install -g @angular/cli

Installation

Clone the Repository:
git clone https://github.com/<your-username>/task-manager-rxjs.git
cd task-manager-rxjs


Install Dependencies:
npm install


Run the Application:
ng serve

Open http://localhost:4200 in your browser.


Usage

Add Tasks: Enter a task title and click "Add" or press Enter.
Toggle Tasks: Check/uncheck tasks to mark them as completed or active.
Delete Tasks: Click the trash icon to remove tasks with a fade-out animation.
Search Tasks: Type in the input to filter tasks reactively (300ms debounce).
Switch Tabs: Use tabs to view All, Active, Completed, or Search results.
Toggle Theme: Click the moon icon to switch between light and dark modes.
Persistence: Tasks and theme preferences are saved in localStorage.

Project Highlights

RxJS Mastery: Implemented reactive search with switchMap to flatten nested Observables, resolving TS2322 errors, and optimized UX with debounceTime.
TypeScript Debugging: Fixed TS2345 errors by handling null values in FormControl, ensuring type safety.
UI/UX: Designed a card-based, responsive UI with animations, dark mode, and a tabbed interface, showcasing front-end skills.
State Management: Used BehaviorSubject for centralized task state, synced with localStorage via RxJS subscriptions.
Performance: Optimized *ngFor with trackBy and ensured smooth animations for task addition/deletion.

Deployment
To deploy the app to GitHub Pages:

Install the Angular CLI GitHub Pages tool:
ng add angular-cli-ghpages


Build and deploy:
ng deploy --base-href=/task-manager-rxjs/


Access the live app at https://<your-username>.github.io/task-manager-rxjs/.

Future Enhancements

Add error handling with RxJS catchError for localStorage failures.
Implement a confirmation dialog for task deletion.
Enhance accessibility with ARIA labels and keyboard navigation.
Add task categories or priorities with filtering.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for bug fixes, features, or improvements.
License
This project is licensed under the MIT License.
Contact

GitHub: Your GitHub Profile
Email: [Your Email]
Portfolio: [Your Portfolio Link]


Built with 💻 and ☕ by [Your Name]
