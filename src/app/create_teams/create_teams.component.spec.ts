import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_teamsComponent } from "./create_teams.component";

describe("create_teamsComponent", () => {
  let component: create_teamsComponent;
  let fixture: ComponentFixture<create_teamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_teamsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_teamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
