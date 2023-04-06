import { ComponentFixture, TestBed } from "@angular/core/testing";

import { view_monthly_activity_reportComponent } from "./view_monthly_activity_report.component";

describe("view_monthly_activity_reportComponent", () => {
  let component: view_monthly_activity_reportComponent;
  let fixture: ComponentFixture<view_monthly_activity_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [view_monthly_activity_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(view_monthly_activity_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
