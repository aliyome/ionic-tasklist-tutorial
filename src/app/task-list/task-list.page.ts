import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {
  title = 'タスク一覧';
  tasks: { name: string }[] = [{ name: 'タスク1' }, { name: 'タスク2' }];
  task: string;

  constructor() {}

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
}
