import { ComponentFixture, TestBed } from "@angular/core/testing";

import { team_employeesComponent } from "./team_employees.component";

describe("team_employeesComponent", () => {
  let component: team_employeesComponent;
  let fixture: ComponentFixture<team_employeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [team_employeesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(team_employeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
