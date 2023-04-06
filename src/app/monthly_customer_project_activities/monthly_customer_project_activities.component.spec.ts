import { ComponentFixture, TestBed } from "@angular/core/testing";

import { monthly_customer_project_activitiesComponent } from "./monthly_customer_project_activities.component";

describe("monthly_customer_project_activitiesComponent", () => {
  let component: monthly_customer_project_activitiesComponent;
  let fixture: ComponentFixture<monthly_customer_project_activitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [monthly_customer_project_activitiesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(monthly_customer_project_activitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
