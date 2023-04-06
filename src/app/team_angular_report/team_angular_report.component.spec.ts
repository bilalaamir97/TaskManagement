import { ComponentFixture, TestBed } from "@angular/core/testing";

import { team_angular_reportComponent } from "./team_angular_report.component";

describe("team_angular_reportComponent", () => {
  let component: team_angular_reportComponent;
  let fixture: ComponentFixture<team_angular_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [team_angular_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(team_angular_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
