import { ComponentFixture, TestBed } from "@angular/core/testing";

import { payroll_payslipComponent } from "./payroll_payslip.component";

describe("payroll_payslipComponent", () => {
  let component: payroll_payslipComponent;
  let fixture: ComponentFixture<payroll_payslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [payroll_payslipComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(payroll_payslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
