import { ComponentFixture, TestBed } from "@angular/core/testing";

import { employee_wise_task_reportComponent } from "./employee_wise_task_report.component";

describe("view_monthly_activity_reportComponent", () => {
  let component: employee_wise_task_reportComponent;
  let fixture: ComponentFixture<employee_wise_task_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employee_wise_task_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employee_wise_task_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
