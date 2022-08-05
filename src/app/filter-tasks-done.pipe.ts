import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/Todo';

@Pipe({
  name: 'filterTasksDone',
  pure: false
})
export class FilterTasksDonePipe implements PipeTransform {

  transform(todos: Todo[]): any {
    return todos.filter((v, i) => v.done === true);
  }

}
