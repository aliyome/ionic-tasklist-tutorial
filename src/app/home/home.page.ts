import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'タスク登録';
  tasks: { name: string }[] = [{ name: 'タスク1' }, { name: 'タスク2' }];
  task: string;

  constructor() {}

  addTask() {
    this.tasks.push({
      name: this.task,
    });
    this.task = '';
  }
}
