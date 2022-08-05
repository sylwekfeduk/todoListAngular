import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NotificationItem } from './models/notificationitem';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDo List';

  constructor() {};
}
