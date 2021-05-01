import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Todo } from 'src/app/shared/Todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  des:string;
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  constructor() {
    this.title='';
    this.des='';
   }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const todo={
      sno:8,
      title:this.title,
      createdate : new Date(),
      description:this.des,
      active:true
    }
    this.todoAdd.emit(todo);
    this.title='';
    this.des='';
  }
  onCheckboxclick(todo:Todo)
  {
    console.log(todo);
  }

}
