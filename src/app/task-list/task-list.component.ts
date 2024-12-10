import { Component, OnInit } from '@angular/core';
import { Task } from "../task.model"

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {


  tasks: Task[] = [
    { id: 1, name: "task1" },
    { id: 2, name: "task2" },
    { id: 3, name: "task3" }];

  deleteTask(task: Task) {
    let indexToDelete = this.tasks.indexOf(task);
    this.tasks.splice(indexToDelete, 1);
  }

  btnClick(e: any) {
  }

  search(str: string) {

  }

  constructor() { }

  ngOnInit(): void {

  }

}
