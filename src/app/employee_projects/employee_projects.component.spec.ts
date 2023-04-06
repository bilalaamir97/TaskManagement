import { ComponentFixture, TestBed } from "@angular/core/testing";

import { employee_projectsComponent } from "./employee_projects.component";

describe("employee_projectsComponent", () => {
  let component: employee_projectsComponent;
  let fixture: ComponentFixture<employee_projectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employee_projectsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employee_projectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
