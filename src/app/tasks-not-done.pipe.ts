import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/Todo';

@Pipe({
  name: 'tasksNotDone'
})
export class TasksNotDonePipe implements PipeTransform {

  transform(todos: Todo[]): any {
    return todos.filter((v, i) => v.done !== true);
  }

}
