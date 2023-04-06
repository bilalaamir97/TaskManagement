import { ComponentFixture, TestBed } from "@angular/core/testing";

import { project_wise_teamsComponent } from "./project_wise_teams.component";

describe("project_wise_teamsComponent", () => {
  let component: project_wise_teamsComponent;
  let fixture: ComponentFixture<project_wise_teamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [project_wise_teamsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(project_wise_teamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
