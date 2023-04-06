import { ComponentFixture, TestBed } from "@angular/core/testing";

import { team_reportComponent } from "./team_report.component";

describe("team_reportComponent", () => {
  let component: team_reportComponent;
  let fixture: ComponentFixture<team_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [team_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(team_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
