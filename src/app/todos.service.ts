import { ElementRef, Injectable, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponent } from './app.component';
import { ErrorNotificationComponent } from './error-notification/error-notification.component';
import { NotificationItem } from './models/notificationitem';
import { Todo } from './models/Todo';
import { SuccessNotificationComponent } from './success-notification/success-notification.component';
import { TodoitemcomponentComponent } from './todoitemcomponent/todoitemcomponent.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit {
  
  todos: Todo[] = [];
  notifications: NotificationItem[] = [];

  constructor() { 
    this.todos = [
      {
        id: 0,
        name: "First task",
        done: true,
        doneCreated: new Date()
      },
      {
        id: 1,
        name: "Second task",
        done: true,
        doneCreated: new Date()
      }
    ];
    this.notifications.push(new NotificationItem(SuccessNotificationComponent, {name: "First task added correctly", state: "success"}));
    this.notifications.push(new NotificationItem(SuccessNotificationComponent, {name: "Second task added correctly", state: "success"}));
  }

  ngOnInit(): void {
    
  }

  addTodoTask(taskName: string) {
    this.todos.push(new Todo(taskName));
    if(taskName.length >= 5) {
      this.notifications.push(new NotificationItem(SuccessNotificationComponent, {name: taskName + " added correctly", state: "success"}));
    } else {
      this.notifications.push(new NotificationItem(ErrorNotificationComponent, {name: "Task is shorten than 5 chars", state: "error"}));
    }
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.notifications.push(new NotificationItem(SuccessNotificationComponent, {name: todo.name + " removed", state: "success"}));
  }

  setDone(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].done = true;
    this.notifications.push(new NotificationItem(SuccessNotificationComponent, {name: todo.name + " set as done", state: "success"}));
  }

  setUndone(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].done = false;
  }

  getAllTasks() {
    return this.todos;
  }

  getNotifications() {
    return this.notifications;
  }
}
