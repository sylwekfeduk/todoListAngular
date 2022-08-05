import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationItem } from '../models/notificationitem';
import { NotificationDirective } from '../notification.directive';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  @Input() notifications: NotificationItem[] = [];

  currentNotificationIndex = 0;
  lastLength = this.notifications.length;

  @ViewChild(NotificationDirective, { static: true}) appNotification!: NotificationDirective;
  interval: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    this.getNotifications();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    if(this.notifications.length !== this.lastLength) {
      const notificationItem = this.notifications[this.currentNotificationIndex];

      const viewContainerRef = this.appNotification.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<Notification>(notificationItem.component);
      componentRef.instance.data = notificationItem.data;
      this.currentNotificationIndex++;
      this.lastLength++;
    } else {
      this.appNotification.viewContainerRef.clear();
    }
  }

  getNotifications() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1500);
  }
}
