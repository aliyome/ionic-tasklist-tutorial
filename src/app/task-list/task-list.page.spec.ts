import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskListPage } from './task-list.page';

describe('TaskListPage', () => {
  let component: TaskListPage;
  let fixture: ComponentFixture<TaskListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
