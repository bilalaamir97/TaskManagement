import { ComponentFixture, TestBed } from "@angular/core/testing";

import { day_wise_logsComponent } from "./day_wise_logs.component";

describe("day_wise_logsComponent", () => {
  let component: day_wise_logsComponent;
  let fixture: ComponentFixture<day_wise_logsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [day_wise_logsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(day_wise_logsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
