import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { TodoitemcomponentComponent } from './todoitemcomponent/todoitemcomponent.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { FilterTasksDonePipe } from './filter-tasks-done.pipe'; 
import { MatListModule } from '@angular/material/list';
import { TooltipDirective } from './tooltip.directive';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationDirective } from './notification.directive';
import { SuccessNotificationComponent } from './success-notification/success-notification.component';
import { ErrorNotificationComponent } from './error-notification/error-notification.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoitemcomponentComponent,
    FilterTasksDonePipe,
    TooltipDirective,
    NotificationsComponent,
    NotificationDirective,
    SuccessNotificationComponent,
    ErrorNotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
