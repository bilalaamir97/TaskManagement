import { ComponentFixture, TestBed } from "@angular/core/testing";

import { project_employees_reportComponent } from "./project_employees_report.component";

describe("project_employees_reportComponent", () => {
  let component: project_employees_reportComponent;
  let fixture: ComponentFixture<project_employees_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [project_employees_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(project_employees_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
