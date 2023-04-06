import { ComponentFixture, TestBed } from "@angular/core/testing";

import { employees_activitiesComponent } from "./employees_activities.component";

describe("employees_activitiesComponent", () => {
  let component: employees_activitiesComponent;
  let fixture: ComponentFixture<employees_activitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employees_activitiesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employees_activitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
