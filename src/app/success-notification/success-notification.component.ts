import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-success-notification',
  templateUrl: './success-notification.component.html',
  styleUrls: ['./success-notification.component.scss']
})
export class SuccessNotificationComponent implements Notification {

  @Input() data: any;
}
