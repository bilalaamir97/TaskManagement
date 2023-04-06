import { ComponentFixture, TestBed } from "@angular/core/testing";

import { monthly_payrollComponent } from "./monthly_payroll.component";

describe("monthly_payrollComponent", () => {
  let component: monthly_payrollComponent;
  let fixture: ComponentFixture<monthly_payrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [monthly_payrollComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(monthly_payrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
