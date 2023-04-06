import { ComponentFixture, TestBed } from "@angular/core/testing";

import { employee_off_daysComponent } from "./employee_off_days.component";

describe("employee_off_daysComponent", () => {
  let component: employee_off_daysComponent;
  let fixture: ComponentFixture<employee_off_daysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employee_off_daysComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employee_off_daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
