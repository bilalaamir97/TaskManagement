import { ComponentFixture, TestBed } from "@angular/core/testing";

import { view_daily_attendanceComponent } from "./view_daily_attendance.component";

describe("view_daily_attendanceComponent", () => {
  let component: view_daily_attendanceComponent;
  let fixture: ComponentFixture<view_daily_attendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [view_daily_attendanceComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(view_daily_attendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
