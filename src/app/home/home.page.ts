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
    localStorage.tasks = JSON.stringify(this.tasks);
    this.task = '';
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
}
