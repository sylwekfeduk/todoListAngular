import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErrorNotificationComponent } from '../error-notification/error-notification.component';
import { NotificationItem } from '../models/notificationitem';
import { Todo } from '../models/Todo';
import { NotificationsComponent } from '../notifications/notifications.component';
import { SuccessNotificationComponent } from '../success-notification/success-notification.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todoitemcomponent',
  templateUrl: './todoitemcomponent.component.html',
  styleUrls: ['./todoitemcomponent.component.scss']
})
export class TodoitemcomponentComponent implements OnInit {

  todos: Todo[] = [];
  taskName: string="";
  @ViewChild('todo')el!: ElementRef;
  notifications: NotificationItem[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.notifications = this.todosService.getNotifications();
    this.todos = this.todosService.getAllTasks();
  }

  addTodo(taskName: string) {
    this.todosService.addTodoTask(taskName);
    this.taskName = "";
    this.el.nativeElement.focus();
  }

  delete(todo: Todo) {
    this.todosService.delete(todo);
  }

  setDone(todo: Todo) {
    this.todosService.setDone(todo);
  }

  setUndone(todo: Todo) {
    this.todosService.setUndone(todo);
  }

}
