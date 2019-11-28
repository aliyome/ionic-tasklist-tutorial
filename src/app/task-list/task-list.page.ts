import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {
  title = 'タスク一覧';
  tasks: { name: string }[] = [{ name: 'タスク1' }, { name: 'タスク2' }];
  task: string;

  constructor(private readonly actionSheetController: ActionSheetController) {}

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  async changeTask() {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          },
        },
        {
          text: '変更',
          icon: 'create',
          handler: () => {
            console.log('Archive clicked');
          },
        },
        {
          text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    actionSheet.present();
  }
}
