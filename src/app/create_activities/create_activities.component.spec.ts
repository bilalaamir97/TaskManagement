import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_activitiesComponent } from "./create_activities.component";

describe("create_activitiesComponent", () => {
  let component: create_activitiesComponent;
  let fixture: ComponentFixture<create_activitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_activitiesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_activitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
