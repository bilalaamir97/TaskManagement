import { ComponentFixture, TestBed } from "@angular/core/testing";

import { monthly_task_reportComponent } from "./monthly_task_report.component";

describe("create_activitiesComponent", () => {
  let component: monthly_task_reportComponent;
  let fixture: ComponentFixture<monthly_task_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [monthly_task_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(monthly_task_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
