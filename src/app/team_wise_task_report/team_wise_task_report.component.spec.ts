import { ComponentFixture, TestBed } from "@angular/core/testing";

import { team_wise_task_reportComponent } from "./team_wise_task_report.component";

describe("team_wise_task_reportComponent", () => {
  let component: team_wise_task_reportComponent;
  let fixture: ComponentFixture<team_wise_task_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [team_wise_task_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(team_wise_task_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
