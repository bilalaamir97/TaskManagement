import { ComponentFixture, TestBed } from "@angular/core/testing";

import { activity_wise_task_reportComponent } from "./activity_wise_task_report.component";

describe("activity_wise_task_reportComponent", () => {
  let component: activity_wise_task_reportComponent;
  let fixture: ComponentFixture<activity_wise_task_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [activity_wise_task_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(activity_wise_task_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
