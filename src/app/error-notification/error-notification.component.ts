import { Component, Input } from '@angular/core';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent implements Notification {
  @Input() data: any;
}
